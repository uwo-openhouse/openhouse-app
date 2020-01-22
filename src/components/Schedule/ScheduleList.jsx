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

const ScheduleList = ({navigation, events}) => {
    if (events.length === 0){
        return (<Text style={styles.header}>No Events</Text>);
    }
    const eventData = Object.entries(
        events.reduce((obj, event) => {
            if (!obj[event.time]) {
                obj[event.time] = [];
            }
            obj[event.time].push(event);
            return obj;
        }, {}))
        .sort(([elementTime1], [elementTime2]) => {
            const time1 = moment(elementTime1, 'H:m');
            const time2 = moment(elementTime2, 'H:m');

            if (time1.isBefore(time2)){
                return -1;
            }
            if (time1.isAfter(time2)){
                return 1;
            }
            return 0;
        })
        .map(([time, events]) => ({
            data: events,
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
            time: PropTypes.string.isRequired,
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
