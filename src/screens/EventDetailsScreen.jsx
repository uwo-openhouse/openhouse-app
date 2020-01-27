import React, {useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet, Dimensions, PermissionsAndroid, Platform} from 'react-native';
import * as PropTypes from "prop-types";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const EventDetailsScreen = ({ navigation, building, event }) => {
    const loc = {
        latitude: building.position.lat,
        longitude: building.position.lng,
    };
    if (Platform.OS == 'android'){
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.location}>Location: {building.name}</Text>
            <Text style={styles.description}>Description: {event.description}</Text>
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
}

EventDetailsScreen.navigationOptions = ({ navigation }) => {
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
        time: PropTypes.string.isRequired,
        uuid: PropTypes.string.isRequired,
    }),
};

export default EventDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
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
    height: Dimensions.get('window').height*(3/5),
  },
});
