import React, {useState} from 'react';
import {View, StyleSheet, Picker} from 'react-native';
import CustomHeader from "../components/CustomHeader";
import ScheduleList from "../components/Schedule/ScheduleList";
import * as PropTypes from "prop-types";


//Note based off thr Schedule Screen

const PlannerScreen = ({navigation, events, areas}) => {
    const noFilterName = 'None';
    const [filter, setFilter] = useState(noFilterName);
    return (
        <View style={styles.container}>
            <CustomHeader navigation={navigation} title="Planner">
                <Picker
                    selectedValue={filter}
                    prompt="Filter"
                    mode="dialog"
                    style={styles.dropdown}
                    onValueChange={(value) => setFilter(value)}
                >
                    <Picker.Item value={noFilterName} label="Show All"/>
                    {areas.map(({uuid, name, color}) => (
                        <Picker.Item color={color} key={`filter-area-${uuid}`} value={uuid} label={name}/>
                    ))}
                </Picker>
            </CustomHeader>
            <ScheduleList navigation={navigation} events={events.filter(({area}) => (area === filter || filter === noFilterName) )}/>
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
