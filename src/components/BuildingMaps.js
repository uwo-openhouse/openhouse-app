import React from 'react';
import {
    StyleSheet,
    Dimensions
} from 'react-native';
import * as PropTypes from "prop-types";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const BuildingMaps = ({loc}) => {

    return (
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
    );
}

export default BuildingMaps;

const styles = StyleSheet.create({
    mapStyle: {
        marginBottom: 20,
        marginHorizontal: 20,
        width: Dimensions.get('window').width - 40,
        height: Dimensions.get('window').height / 2 - 20,
    },
});
