import React from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View, Dimensions, RefreshControl,
} from 'react-native';
import * as PropTypes from "prop-types";
import CustomHeader from "../components/CustomHeader";
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

const HomeScreen = ({navigation, hasOpenHouse, openHouse, refreshing, onRefresh}) => {
    let messageTitle = '';
    let messageBody = 'There is no open house right now. Please check back later';


    if (hasOpenHouse) {
        messageBody = openHouse.info.replace(new RegExp('\n', 'g'), "\n\n");
        messageTitle = `Welcome to the ${openHouse.name}`;
    }

    return (
        <View style={{flex: 1}}>
            <CustomHeader navigation={navigation} title="Home"/>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        tintColor={Colors.westernPurple}
                        colors={[Colors.westernPurple]}
                        refreshing={refreshing} onRefresh={onRefresh}/>
                }>
                <View style={styles.body}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/MBOHbanner.png')}>
                    </Image>
                </View>
                <Text style={styles.title}>{messageTitle}</Text>
                <View style={styles.content}>
                    <Text style={styles.messageBody}>{messageBody}</Text>
                    <Button buttonStyle={styles.navButton}
                            title="Schedule"
                            onPress={() => navigation.navigate('Schedule')}/>
                    <Button buttonStyle={styles.navButton}
                            title="Planner"
                            onPress={() => navigation.navigate('Planner')}/>
                    <Button buttonStyle={styles.navButton}
                            title="Eateries"
                            onPress={() => navigation.navigate('Eateries')}/>
                </View>
            </ScrollView>
        </View>
    );
};

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    hasOpenHouse: PropTypes.bool.isRequired,
    openHouse: PropTypes.shape({
        name: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
        visible: PropTypes.bool.isRequired,
        date: PropTypes.number.isRequired,
    }),
    refreshing: PropTypes.bool.isRequired,
    onRefresh: PropTypes.func.isRequired,
};

HomeScreen.defaultProps = {
    openHouse: null,
};

export default HomeScreen;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    title: {
        color: 'white',
        backgroundColor: Colors.westernPurple,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 35,
        fontFamily: Fonts.boldFont,
        fontSize: 22,
        lineHeight: 28,
    },
    content: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
    },
    messageBody: {
        lineHeight: 18,
        fontFamily: Fonts.normalFont,
        marginHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 25,
        marginBottom: 10,
        borderBottomColor: Colors.lineColor,
        borderBottomWidth: 1,
    },
    navButton: {
        backgroundColor: Colors.westernPurple,
        borderRadius: 25,
        marginTop: 10,
        marginBottom: 5,
    },
    body: {
        height: Math.max(Dimensions.get("screen").height - 600, 250),
    }
});
