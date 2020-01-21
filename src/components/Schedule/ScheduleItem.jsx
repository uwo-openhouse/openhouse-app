import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import * as PropTypes from "prop-types";
import {formatTime} from "../../service";

const ScheduleItem = ({navigation, name, room, areaColor, buildingName, time}) =>  {
    return (
        <View style={{marginVertical: 5}}>
            <TouchableHighlight underlayColor="black" onPress={()=> { navigation.navigate('EventDetails');}}>
                <View style={styles.item}>

                    <View style={styles.timeContainer}>
                        <Text style={styles.time}>{formatTime(time)}</Text>
                    </View>

                    <View style={styles.itemContentContainer}>
                        <View style={styles.titleContainer}>
                            <View style={[styles.categoryDot, {backgroundColor: areaColor}]}/>
                            <Text style={styles.title}>{name}</Text>
                        </View>
                        <Text style={styles.location}>{buildingName} {room}</Text>
                    </View>

                </View>
            </TouchableHighlight>
        </View>
    );
};

ScheduleItem.propTypes = {
    navigation: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
    areaColor: PropTypes.string.isRequired,
    buildingName: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 15,

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
        fontSize: 24,
        color: Colors.WesternPurple,
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
        color:'#999999'
    },
    timeContainer: {
        marginRight: 8,
        width: 55,
    },

    location: {
        fontSize: 18,
        color: '#666666',
    },
    categoryDot:{
        flexGrow: 0,
        flexShrink: 0,
        top: 8,
        marginRight: 8,
        width: 16,
        height: 16,
        borderRadius: 16/2,
    },
});

export default ScheduleItem;
