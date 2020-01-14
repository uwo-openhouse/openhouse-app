import React from 'react';
import { View,Text, ScrollView, Image, StyleSheet } from 'react-native';
import CustomHeader from "../components/CustomHeader";
import ScheduleList from "../components/ScheduleList";


class ScheduleScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Schedule',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/robot-dev.png')}
        style={{width: 50, height: 50}}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <CustomHeader navigation={this.props.navigation} title="Schedule" />
        <ScheduleList/>
      </View>
    );
  }
}

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#E5E5E5',
  },
});
