import React from 'react';
import { View,Text, ScrollView, Image, StyleSheet } from 'react-native';
import CustomHeader from "../components/CustomHeader";


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
      <ScrollView>
        <CustomHeader navigation={this.props.navigation} title="Schedule" />
        <Text>This is Schedule Screen</Text>
      </ScrollView>
    );
  }
}

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
