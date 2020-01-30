import React, {useState} from 'react';
import {View, StyleSheet, Picker} from 'react-native';
import CustomHeader from "../components/CustomHeader";
import ScheduleList from "../components/Schedule/ScheduleList";
import * as PropTypes from "prop-types";

const ScheduleScreen = ({navigation, events, areas}) => {
    const noFilterName = 'None';
    const [filter, setFilter] = useState(noFilterName);
    return (
        <View style={styles.container}>
            <CustomHeader navigation={navigation} title="Schedule">
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
    dropdown: {
        flex: 1,
        width: 150,
        color: 'white',
    }
});
