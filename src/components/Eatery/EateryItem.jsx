import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from "react-native";
import React from "react";
import { Icon } from 'react-native-elements';
import ListItemStyle from "../../constants/Styles";
import * as PropTypes from "prop-types";
import {formatTime} from "../../service";

const EateryItem = ({navigation, name, building, openTime, closeTime, uuid}) =>  {
    return (
        <View style={{marginVertical: 5}}>
            <TouchableHighlight underlayColor="black" onPress={()=> { navigation.navigate('EateryDetails', {eateryID: uuid});}}>
                <View style={ListItemStyle.item}>

                    <View style={ListItemStyle.timeContainer}>
                        <Text style={ListItemStyle.time}>{formatTime(openTime)}</Text>
                        <Icon size={10} name='minus' type="font-awesome" color="#999999"/>
                        <Text style={ListItemStyle.time}>{formatTime(closeTime)}</Text>
                    </View>

                    <View style={ListItemStyle.itemContentContainer}>
                        <View style={ListItemStyle.titleContainer}>
                            <Text style={ListItemStyle.title}>{name}</Text>
                        </View>
                        <Text style={ListItemStyle.location}>{building.name}</Text>
                    </View>

                </View>
            </TouchableHighlight>
        </View>
    );
};

EateryItem.propTypes = {
    navigation: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    openTime: PropTypes.string.isRequired,
    closeTime: PropTypes.string.isRequired,
    building: PropTypes.shape({
        name: PropTypes.string.isRequired,
        position: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired,
        }),
        uuid: PropTypes.string.isRequired,
    }),
    uuid:PropTypes.string.isRequired,
};

export default EateryItem;
