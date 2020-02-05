import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    PermissionsAndroid,
    Platform,
    Button,
    ScrollView
} from 'react-native';
import * as PropTypes from "prop-types";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Colors from "../constants/Colors";
import { Header } from "react-native-elements";
import { HeaderBackButton } from "react-navigation-stack";
import BuildingMaps from "../components/BuildingMaps";

const EateryDetailsScreen = ({navigation, building, eatery}) => {
    const loc = {
        latitude: building.position.lat,
        longitude: building.position.lng,
    };
    if (Platform.OS === 'android') {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
    }

    return (
        <ScrollView
            style={styles.container}
            stickyHeaderIndices={[0]}
        >
            <Header
                leftComponent={<HeaderBackButton onPress={() => navigation.goBack()}  tintColor="#fff"/>}
                centerComponent={{
                    text: eatery.name,
                    style: {
                      color: "#fff",
                      fontSize: 20,
                      fontFamily:'bentonsans-bold',
                    },
                }}
                statusBarProps={{ barStyle: "light-content" }}
                containerStyle={{
                    backgroundColor: Colors.westernPurple,
                }}
            />
            <Text style={styles.location}>Location: {building.name}</Text>
            <BuildingMaps loc={loc}/>
        </ScrollView>
    );
};

EateryDetailsScreen.navigationOptions = ({navigation}) => {
    return {
        title: navigation.getParam('name'),
    };
};

EateryDetailsScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    building: PropTypes.shape({
        name: PropTypes.string.isRequired,
        position: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired,
        }),
        uuid: PropTypes.string.isRequired,
    }),
    eatery: PropTypes.shape({
        building: PropTypes.string.isRequired,
        closeTime: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        openTime: PropTypes.string.isRequired,
        uuid: PropTypes.string.isRequired,
    }),
};

export default EateryDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#E5E5E5',
    },
    location: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 20,
        marginBottom: 20,
        fontSize: 20,
        color: Colors.westernPurple,
    },
    mapStyle: {
        marginBottom: 20,
        marginHorizontal: 20,
        width: Dimensions.get('window').width - 40,
        height: Dimensions.get('window').height / 2 - 20,
    },
});
