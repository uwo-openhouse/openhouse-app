import React, {useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet, Dimensions} from 'react-native';
import * as PropTypes from "prop-types";
import MapView from 'react-native-maps'

const EventDetailsScreen = ({navigation, event, building, area}) => {
    console.log(event);
    return (
    <View style={styles.container}>
        <Text>Content Here</Text>
        <MapView
        style={styles.mapStyle}
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        />
    </View>
    );
}

EventDetailsScreen.navigationOptions = {
    title: 'Event Details',
};

EventDetailsScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    event: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        area: PropTypes.string.isRequired,
        building: PropTypes.string.isRequired,
        openHouse: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        room: PropTypes.string.isRequired,
    }),
    area: PropTypes.shape({
        name: PropTypes.string.isRequired,
        uuid: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
    }),
};

export default EventDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#E5E5E5',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/3,
  },
});
