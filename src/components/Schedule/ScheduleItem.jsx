import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Dimensions
} from "react-native";
import React from "react";
import { Icon } from 'react-native-elements';
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import * as PropTypes from "prop-types";
import {format24Time as formatMinimalTime} from "../../service";

const ScheduleItem = ({navigation, name, room, areaColor, building, startTime, endTime, uuid}) =>  {
    return (
        <View style={{marginVertical: 0}}>
            <TouchableHighlight underlayColor="black" onPress={()=> { navigation.navigate('EventDetails', {eventID: uuid});}}>
                <View style={styles.item}>

                    <View style={styles.timeContainer}>
                        <Text style={styles.time}>{formatMinimalTime(startTime)}</Text>
                        <Icon size={10} name='minus' type="font-awesome" color="#999999"/>
                        <Text style={styles.time}>{formatMinimalTime(endTime)}</Text>
                    </View>

                    <View style={styles.itemContentContainer}>
                        <View style={styles.titleContainer}>
                            <View style={[styles.categoryDot, {backgroundColor: areaColor}]}/>
                            <Text style={styles.title}>{name}</Text>
                        </View>
                        <Text style={styles.location}>{building.name} {room}</Text>
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
    areaColor: PropTypes.string.isRequired,
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

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        paddingTop: 12,
        paddingBottom: 12,
        paddingHorizontal: 15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },

    title: {
        flexGrow: 1,
        fontSize: 18,
        fontFamily: Fonts.normalFont,
        color: Colors.westernPurple,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    itemContentContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        flex: 1,
        
    },
    time: {
        fontSize: 14,
        color:'#999999',
        textAlign: 'center',
    },
    timeContainer: {
        marginRight: 16,
        width: Dimensions.get('window').width*0.11,
        
    },

    location: {
        fontSize: 16,
        fontFamily: Fonts.normalFont,
        color: '#666666',
        marginTop: 6,
    },
    categoryDot:{
        flexGrow: 0,
        flexShrink: 0,
        top: 3,
        marginRight: 8,
        width: 16,
        height: 16,
        borderRadius: 16/2,
    },
});

export default ScheduleItem;
