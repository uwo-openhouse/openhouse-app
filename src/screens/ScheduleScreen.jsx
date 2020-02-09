import React, {useState, useRef} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import CustomHeader from "../components/CustomHeader";
import ScheduleList from "../components/Schedule/ScheduleList";
import AreaFilter from  "../components/AreaFilter";
import * as PropTypes from "prop-types";
import Toast from 'react-native-easy-toast';


const ScheduleScreen = ({navigation, events, areas}) => {
    const noFilterName = 'None';
    const [filter, setFilter] = useState(noFilterName);

    const toast = useRef(null);

    return (
        <View style={styles.container}>
            <CustomHeader navigation={navigation} title="Schedule">
                <AreaFilter areas={areas} filter={filter} setFilter={setFilter} noFilterName={noFilterName}/>
            </CustomHeader>
            <ScheduleList navigation={navigation} toast={toast} events={events.filter(({area}) => (area === filter || filter === noFilterName) )}/>
            <Toast
                ref={toast}
                style={styles.toast}
            />
        </View>
    );
};

ScheduleScreen.navigationOptions = {
    title: 'Schedule',
    headerShown: false,
};
ScheduleScreen.propTypes = {
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
    areas: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            uuid: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
        })
    )
};

export default ScheduleScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#E5E5E5',
    },
    toast: {
        width: Dimensions.get('window').width*3/4,
    },
});
