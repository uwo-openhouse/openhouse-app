import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    SectionList, RefreshControl
} from 'react-native';
import * as PropTypes from 'prop-types';
import moment from "moment";
import EateryItem from "../../containers/Eatery/EateryItem";
import SectionListStyle from "../../constants/Styles";
import Colors from "../../constants/Colors";

const isOpen = (eatery) => {
    const parsedOpenTime = moment(eatery.openTime, 'H:m');
    const parsedCloseTime = moment(eatery.closeTime, 'H:m');
    const parsedCurrentTime = moment(new Date(), 'H:m');

    return parsedOpenTime.isSameOrBefore(parsedCurrentTime) && parsedCloseTime.isSameOrAfter(parsedCurrentTime);
};

const sortEateries = (a, b) => {
    const openA = isOpen(a);
    const openB = isOpen(b);

    if (openA === openB) {
        return a.name.localeCompare(b.name);
    }
    else if (openA) {
        return -1;
    }
    else if (openB) {
        return 1;
    }
    return 0;
};

const EateryList = ({navigation, eateries, refreshing, onRefresh}) => {
    if (eateries.length === 0){
        return (<Text style={SectionListStyle.emptyListMsg}>No Eateries</Text>);
    }

    const eateriesData = Object.entries(
        eateries.reduce((obj, eatery) => {
            if (isOpen(eatery)) {
                if (!obj['Open']) {
                    obj['Open'] = [];
                }
                obj['Open'].push(eatery);
            }
            else {
                if (!obj['Closed']) {
                    obj['Closed'] = [];
                }
                obj['Closed'].push(eatery);
            }
            return obj;
        }, {})
    ).map(([status, eateries]) => ({
        data: eateries.sort(sortEateries),
        title: status,
    }));

    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={eateriesData}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => <EateryItem id={item.id} navigation={navigation} {...item}/>}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={[SectionListStyle.header, title === 'Open' ? styles.open : styles.closed]}>{title}</Text>
                )}
                refreshControl={
                    <RefreshControl
                        tintColor={Colors.westernPurple}
                        colors={[Colors.westernPurple]}
                        refreshing={refreshing} onRefresh={onRefresh}
                    />}
            />
        </SafeAreaView>
    );
};

EateryList.propTypes = {
    navigation: PropTypes.object.isRequired,
    eateries: PropTypes.arrayOf(
        PropTypes.shape({
            building: PropTypes.string.isRequired,
            closeTime: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            openTime: PropTypes.string.isRequired,
            uuid: PropTypes.string.isRequired,
        }),
    ),
    refreshing: PropTypes.bool.isRequired,
    onRefresh: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        marginHorizontal: 0,
    },
    open: {
        color: "green",
    },
    closed: {
        color: "red",
    },
});

export default EateryList;
