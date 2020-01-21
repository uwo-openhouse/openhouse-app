import React from 'react';
import { View,StyleSheet} from 'react-native';
import CustomHeader from "../components/CustomHeader";
import ScheduleList from "../components/Schedule/ScheduleList";
import * as PropTypes from "prop-types";

//TODO filter
const ScheduleScreen = ({navigation, events}) => (
    <View style={styles.container}>
        <CustomHeader navigation={navigation} title="Schedule" />
        <ScheduleList navigation={navigation} events={events}/>
    </View>

);

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
            time: PropTypes.string.isRequired,
            room: PropTypes.string.isRequired,
        })).isRequired,
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#E5E5E5',
  },
});
