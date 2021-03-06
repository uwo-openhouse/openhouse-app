import React from 'react';
import {
    Text,
    StyleSheet,
    PermissionsAndroid,
    Platform,
    ScrollView,
    View,
} from 'react-native';
import * as PropTypes from "prop-types";
import Colors from "../constants/Colors";
import {Header, Icon} from "react-native-elements";
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
            contentContainerStyle={{flexGrow: 1}}
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
            <View style={styles.locationContainer}>
                <Icon iconStyle={styles.icon} name="map-marker" type='font-awesome' color={Colors.westernPurple}/>
                <Text style={styles.location}>{building.name}</Text>
            </View>
            <View style={styles.mapContainer}>
                <BuildingMaps loc={loc}/>
            </View>

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
        backgroundColor: Colors.background,
    },
    locationContainer: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
    },
    icon: {
        flex: 1,
        marginRight: 8,
    },
    location: {
        flex: 1,
        fontSize: 20,
        color: Colors.westernPurple,
    },
    mapContainer: {
        flexGrow: 6,
        justifyContent: "flex-end"
    }
});
