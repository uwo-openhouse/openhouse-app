import React, {useRef} from 'react';
import {
    Text,
    StyleSheet,
    Dimensions,
    PermissionsAndroid,
    Platform,
    ScrollView
} from 'react-native';
import * as PropTypes from "prop-types";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Colors from "../constants/Colors";
import { Header } from "react-native-elements";
import { HeaderBackButton } from "react-navigation-stack";
import StarIcon from "../components/StarIcon";
import BuildingMaps from "../components/BuildingMaps";
import Toast from 'react-native-easy-toast';
import {formatTime} from "../service";

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
    const toast = useRef(null);

    return (
        <ScrollView
            style={styles.container}
            stickyHeaderIndices={[0]}
            contentContainerStyle={{flexGrow: 1}}
        >
            <Header
                leftComponent={<HeaderBackButton onPress={() => navigation.goBack()}  tintColor="#fff"/>}
                centerComponent={{
                    text: event.name,
                    style: {
                      color: "#fff",
                      fontSize: 20,
                      fontFamily:'bentonsans-bold',
                    },
                }}
                rightComponent={
                    <StarIcon toast={toast} isLightBackground={true} isInPlanner={isInPlanner} add={addToPlanner} remove={(e) => removeFromPlanner(e.uuid)} event={event} />
                }
                statusBarProps={{ barStyle: "light-content" }}
                containerStyle={{
                    backgroundColor: Colors.westernPurple,
                }}
            />
            <Text style={styles.details}>Location: {building.name}</Text>
            <Text style={styles.details}>Time: {formatTime(event.startTime)} - {formatTime(event.endTime)}</Text>
            <Text style={styles.description}>Description: {event.description}</Text>
            <BuildingMaps loc={loc}/>
            <Toast
                ref={toast}
                position='bottom'
                style={styles.toast}
            />
        </ScrollView>
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
    details: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 20,
        fontSize: 20,
        color: Colors.westernPurple,
    },
    description: {
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 20,
        fontSize: 20,
        flex: 5,
        color: Colors.westernPurple,
    },
    toast: {
        width: Dimensions.get('window').width*3/4,
    },
});
