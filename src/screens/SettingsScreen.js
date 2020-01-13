import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import CustomHeader from "../components/CustomHeader";

class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Settings',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/robot-dev.png')}
        style={{width: 50, height: 50}}
      />
    ),
  };

  render() {
    return (
      <View>
        <CustomHeader navigation={this.props.navigation} title="Settings" />
        <Text>This is Settings Screen</Text>
      </View>
    );
  }
}


export default SettingsScreen;