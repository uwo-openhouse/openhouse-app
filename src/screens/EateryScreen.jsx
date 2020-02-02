import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CustomHeader from "../components/CustomHeader";
import * as PropTypes from "prop-types";

const EateryScreen = ({navigation, eateries, isLoaded}) => {
    console.log(eateries);
    return (
        <View style={styles.container}>
            <CustomHeader navigation={navigation} title="Eateries">
            </CustomHeader>
            <Text>test</Text>
        </View>
    );
};

EateryScreen.navigationOptions = {
    title: 'Eateries',
    headerShown: false,
};
EateryScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    /*events: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            area: PropTypes.string.isRequired,
            building: PropTypes.string.isRequired,
            openHouse: PropTypes.string.isRequired,
            startTime: PropTypes.string.isRequired,
            endTime: PropTypes.string.isRequired,
            room: PropTypes.string.isRequired,
        })).isRequired,
    areas: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            uuid: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
        })
    )*/
};

export default EateryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#E5E5E5',
    },
});
