import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomHeader from "../components/CustomHeader";
import * as PropTypes from "prop-types";
import EateryList from "../components/Eatery/EateryList";
import Colors from "../constants/Colors";

const EateryScreen = ({navigation, eateries}) => {
    return (
        <View style={styles.container}>
            <CustomHeader navigation={navigation} title="Eateries"/>
            <EateryList navigation={navigation} eateries={eateries}/>
        </View>
    );
};

EateryScreen.navigationOptions = {
    headerShown: false,
};
EateryScreen.propTypes = {
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

export default EateryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: Colors.background,
    },
});
