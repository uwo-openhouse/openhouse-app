import React, {useState, useRef} from 'react';
import {
    Dimensions,
    StyleSheet,
    Platform,
    Text,
    View
} from 'react-native';
import * as PropTypes from "prop-types";
import { Icon } from "react-native-elements";
import Toast, {DURATION} from 'react-native-easy-toast';

import Colors from "../constants/Colors";

const StarIcon = ({toast, isInPlanner, add, remove, event}) => {
    const border = {name: "star-border", check: false};
    const full = {name: "star", check: true};

    const star = isInPlanner ? full : border;
    const [icon, setIcon] = useState(star);

    return (
        <View>
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
                        toast.current.show(<Text style={styles.toastText} >Event has been removed from your planner.</Text>);
                        setIcon(border);
                    }
                    else {
                        add(event);
                        toast.current.show(<Text style={styles.toastText} >Event has been added to your planner.</Text>);
                        setIcon(full);
                    }
                }}
            />
        </View>
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

const styles = StyleSheet.create({
    toastText: {
        color: 'white',
        textAlign: 'center',
    }
});

export default StarIcon;
