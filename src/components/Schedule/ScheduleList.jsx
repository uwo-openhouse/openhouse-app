import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    SectionList,
} from 'react-native';
import * as PropTypes from 'prop-types';
import moment from "moment";
import {formatTime} from "../../service";
import ScheduleItem from "../../containers/Schedule/SchduleItem";

const timeCompare = (time1, time2) => {
    const parsedTime1 = moment(time1, 'H:m');
    const parsedTime2 = moment(time2, 'H:m');

    if (parsedTime1.isBefore(parsedTime2)){
        return -1;
    }
    if (parsedTime1.isAfter(parsedTime2)){
        return 1;
    }
    return 0;
};

const ScheduleList = ({navigation, events}) => {
    if (events.length === 0){
        return (<Text style={styles.header}>No Events</Text>);
    }
    const eventData = Object.entries(
        events.reduce((obj, event) => {
            if (!obj[event.startTime]) {
                obj[event.startTime] = [];
            }
            obj[event.startTime].push(event);
            return obj;
        }, {}))
        .sort(([elementTime1], [elementTime2]) => timeCompare(elementTime1, elementTime2))
        .map(([time, events]) => ({
            data: events.sort(({endTime: endTime1},{endTime: endTime2}) => timeCompare(endTime1, endTime2)),
            title: formatTime(time),
        }));
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={eventData}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => <ScheduleItem id={item.id} navigation={navigation} {...item} />}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    );
};

ScheduleList.propTypes = {
    navigation: PropTypes.object.isRequired,
    events: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            area: PropTypes.string.isRequired,
            building: PropTypes.string.isRequired,
            openHouse: PropTypes.string.isRequired,
            startTime: PropTypes.string.isRequired,
            endTime: PropTypes.string.isRequired,
            room: PropTypes.string.isRequired,
        })).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        marginHorizontal: 0,
    },
    header: {
        fontSize: 20,
        opacity: 0.5,
        marginHorizontal: 10,
        marginTop: 10,
    },
});

export default ScheduleList;
