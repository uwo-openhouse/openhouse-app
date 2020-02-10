import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import * as PropTypes from "prop-types";
import CustomIcon from "./CustomIcon";
import Colors from "../constants/Colors";

const StarIcon = ({toast, isLightBackground, isInPlanner, add, remove, event}) => {
    const addIcon = {name: "event-add", check: false};
    const cancelIcon = {name: "event-cancel", check: true};

    const star = isInPlanner ? cancelIcon : addIcon;

    return (
        <View>
            <CustomIcon
                name={star.name}
                size={30}
                color={isLightBackground ? "#FFFFFF" : Colors.offBlack}
                underlayColor={Colors.westernPurple}

                onPress={() => {
                    if (star.check) {
                        remove(event);
                        toast.current.show(<Text style={styles.toastText} >Event has been removed from your planner.</Text>);
                    }
                    else {
                        add(event);
                        toast.current.show(<Text style={styles.toastText} >Event has been added to your planner.</Text>);
                    }
                }}
            />
        </View>
    );
};

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
