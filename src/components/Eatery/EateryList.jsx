import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    SectionList,
    View
} from 'react-native';
import * as PropTypes from 'prop-types';
import moment from "moment";
import {formatTime} from "../../service";
import EateryItem from "../../containers/Eatery/EateryItem";

const isOpen = (eatery) => {
    const parsedOpenTime = moment(eatery.openTime, 'H:m');
    const parsedCloseTime = moment(eatery.closeTime, 'H:m');
    const parsedCurrentTime = moment(new Date(), 'H:m');

    if (parsedOpenTime.isAfter(parsedCurrentTime) && parsedCloseTime.isBefore(parsedCurrentTime)) {
        return true;
    }
    else {
        return false;
    }
};

const sortEateries = (a, b) => {
    const openA = isOpen(a);
    const openB = isOpen(b);

    if (openA == openB) {
        return a.name.localeCompare(b.name);
    }
    else if (openA) {
        return -1;
    }
    else if (openB) {
        return 1;
    }
    return 0;
}

const EateryList = ({navigation, eateries}) => {
    if (eateries.length === 0){
        return (<Text style={styles.header}>No Eateries</Text>);
    }

    eateries.sort(sortEateries);
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

    console.log(eateriesData);
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={eateriesData}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => <EateryItem id={item.id} navigation={navigation} {...item}/>}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={styles.header}>{title}</Text>
                )}
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
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        marginHorizontal: 0,
    },
    header: {
        fontSize: 20,
        marginHorizontal: 10,
        marginTop: 10,
        color: "red"
    },
});

export default EateryList;
