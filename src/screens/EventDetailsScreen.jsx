import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    PermissionsAndroid,
    Platform,
    Button
} from 'react-native';
import * as PropTypes from "prop-types";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Colors from "../constants/Colors";
import { Header } from "react-native-elements";
import { HeaderBackButton  } from "react-navigation-stack";

const EventDetailsScreen = ({navigation, building, event, isInPlanner, addToPlanner, removeFromPlanner}) => {
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
        <View style={styles.container}>
            <Header
                leftComponent={<HeaderBackButton onPress={() => navigation.goBack()}  tintColor="#fff"/>}
                centerComponent={{
                    text: event.name,
                    style: { color: "#fff", fontWeight: "bold" },
                }}
                statusBarProps={{ barStyle: "light-content" }}
                containerStyle={{
                    backgroundColor: Colors.westernPurple,
                }}
            />
            <Text style={styles.location}>Location: {building.name}</Text>
            <Text style={styles.description}>Description: {event.description}</Text>
            {isInPlanner ? (
                <Button title="Remove from my planner" onPress={() => removeFromPlanner(event)}/>
            ) : (
                <Button title="Add to my planner" onPress={() => addToPlanner(event)}/>
            )}
            <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.mapStyle}
            initialRegion={{
                latitude: loc.latitude,
                longitude: loc.longitude,
                latitudeDelta: 0.004,
                longitudeDelta: 0.002,
            }}
            onMapReady={() => {
            }}
            onUserLocationChange={(location) => {console.log(location)}}
            loadingEnabled
            showsUserLocation
            showsMyLocationButton
            >
                <Marker
                coordinate={loc}
                />
            </MapView>
        </View>
    );
};

EventDetailsScreen.navigationOptions = ({navigation}) => {
    return {
        title: navigation.getParam('name'),
    };
};

EventDetailsScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    building: PropTypes.shape({
        name: PropTypes.string.isRequired,
        position: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired,
        }),
        uuid: PropTypes.string.isRequired,
    }),
    event: PropTypes.shape({
        area: PropTypes.string.isRequired,
        building: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        openHouse: PropTypes.string.isRequired,
        room: PropTypes.string.isRequired,
        startTime: PropTypes.string.isRequired,
        endTime: PropTypes.string.isRequired,
        uuid: PropTypes.string.isRequired,
    }),
    isInPlanner: PropTypes.bool.isRequired,
    addToPlanner: PropTypes.func.isRequired,
    removeFromPlanner: PropTypes.func.isRequired,
};

export default EventDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#E5E5E5',
    },
    location: {
        flex: 1
    },
    description: {
        flex: 5,
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * (3 / 5),
    },
});
