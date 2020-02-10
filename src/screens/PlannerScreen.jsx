import React, {useState, useRef} from 'react';
import {View, StyleSheet, Picker} from 'react-native';
import CustomHeader from "../components/CustomHeader";
import ScheduleList from "../components/Schedule/ScheduleList";
import AreaFilter from  "../components/AreaFilter";
import * as PropTypes from "prop-types";
import Toast from 'react-native-easy-toast';

//Note based off the Schedule Screen

const PlannerScreen = ({navigation, events, areas, eventsInPlanner}) => {
    const noFilterName = 'None';
    const [filter, setFilter] = useState(noFilterName);

    const toast = useRef(null);

    return (
        <View style={styles.container}>
            <CustomHeader navigation={navigation} title="Planner">
                <AreaFilter areas={areas} filter={filter} setFilter={setFilter} noFilterName={noFilterName}/>
            </CustomHeader>
            <ScheduleList navigation={navigation} toast={toast} events={events.filter(({area, uuid}) => (eventsInPlanner.includes(uuid) && (area === filter || filter === noFilterName)) )}/>
            <Toast
                ref={toast}
                style={styles.toast}
            />
        </View>

    );
};

PlannerScreen.navigationOptions = {
    title: 'Planner',
    headerShown: false,
};
PlannerScreen.propTypes = {
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

export default PlannerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#E5E5E5',
    },
    dropdown: {
        flex: 1,
        width: 150,
        color: 'white',
    }
});
