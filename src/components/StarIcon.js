import React, {useState} from 'react';
import {
	Platform,
    ToastAndroid
} from 'react-native';
import * as PropTypes from "prop-types";
import { Icon } from "react-native-elements";

import Colors from "../constants/Colors";

const StarIcon = ({isInPlanner, add, remove, event}) => {
	const border = {name: "star-border", check: false};
	const full = {name: "star", check: true};

    const star = isInPlanner ? full : border;
    const [icon, setIcon] = useState(star);

	return (
		<Icon
	        name={icon.name}
	        size={30}
	        color="#FFFFFF"
	        underlayColor={Colors.westernPurple}
	        style={{
	            backgroundColor: Colors.westernPurple,
	        }}
	        onPress={() => {
			    if (star.check) {
			        remove(event);
			        if (Platform.OS == 'android') {
			            ToastAndroid.show('Event has been removed from your itinerary.', ToastAndroid.SHORT);
			        }
			        setIcon(border);
			    }
			    else {
			        add(event);
			        if (Platform.OS == 'android') {
			            ToastAndroid.show('Event has been added to your itinerary.', ToastAndroid.SHORT);
			        }
			        setIcon(full);
			    }
	        }}
	    />
	);
}

StarIcon.propTypes = {
    isInPlanner: PropTypes.bool.isRequired,
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
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
};

export default StarIcon;
