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
import * as PropTypes from "prop-types";
import {formatTime} from "../../service";

const EateryItem = ({navigation, name, building, openTime, closeTime, uuid}) =>  {
    return (
        <View style={{marginVertical: 5}}>
            <TouchableHighlight underlayColor="black" onPress={()=> { /*navigation.navigate('EventDetails', {eventID: uuid});*/}}>
                <View style={styles.item}>

                    <View style={styles.timeContainer}>
                        <Text style={styles.time}>{formatTime(openTime)}</Text>
                        <Icon name='minus' type="font-awesome" color="#999999"/>
                        <Text style={styles.time}>{formatTime(closeTime)}</Text>
                    </View>

                    <View style={styles.itemContentContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{name}</Text>
                        </View>
                        <Text style={styles.location}>{building.name}</Text>
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
        color:'#999999',
        textAlign: 'center',
    },
    timeContainer: {
        marginRight: 8,
        width: Dimensions.get('window').width*0.15,
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

export default EateryItem;
