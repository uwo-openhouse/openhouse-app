import {
    Text,
    TouchableHighlight,
    View,
} from "react-native";
import React from "react";
import { Icon } from 'react-native-elements';
import ListItemStyle from "../../constants/Styles";
import * as PropTypes from "prop-types";
import {formatTime} from "../../service";
import StarIcon from "../StarIcon";

const ScheduleItem = ({navigation, toast, isInPlanner, addToPlanner,  removeFromPlanner, event,
                        name, room, area, building, startTime, endTime, uuid}) =>  {
    return (
        <View style={{marginVertical: 0}}>
            <TouchableHighlight underlayColor="black" onPress={()=> { navigation.navigate('EventDetails', {eventID: uuid});}}>
                <View style={ListItemStyle.item}>

                    <View style={ListItemStyle.timeContainer}>
                        <Text style={ListItemStyle.time}>{formatTime(startTime)}</Text>
                        <Icon size={10} name='minus' type="font-awesome" color="#999999"/>
                        <Text style={ListItemStyle.time}>{formatTime(endTime)}</Text>
                    </View>

                    <View style={ListItemStyle.itemContentContainer}>
                        <View style={ListItemStyle.titleContainer}>
                            <View style={[ListItemStyle.categoryDot, {backgroundColor: area.color}]}/>
                            <View style={ListItemStyle.titleGroup}>
                                <Text style={ListItemStyle.title}>{name}</Text>
                                <Text style={ListItemStyle.area}>{area.name}</Text>
                                <Text style={ListItemStyle.location}>{building.name} {room}</Text>
                            </View>

                        </View>

                    </View>
                    <View style={ListItemStyle.scheduleIcon}>
                        <StarIcon toast={toast} isLightBackground={false} isInPlanner={isInPlanner} add={addToPlanner} remove={(e) => removeFromPlanner(e.uuid)} event={event} />
                    </View>

                </View>
            </TouchableHighlight>
        </View>
    );
};

ScheduleItem.propTypes = {
    navigation: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
    area: PropTypes.shape({
        name: PropTypes.string.isRequired,
        uuid: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
    }).isRequired,
    building: PropTypes.shape({
        name: PropTypes.string.isRequired,
        position: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired,
        }),
        uuid: PropTypes.string.isRequired,
    }),
    uuid:PropTypes.string.isRequired,
    isInPlanner: PropTypes.bool.isRequired,
};

export default ScheduleItem;
