import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import CustomHeader from "../components/CustomHeader";


class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
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
        <CustomHeader navigation={this.props.navigation} title="Home" />
        <Text>This is Home Screen</Text>
      </View>
    );
  }
}

export default HomeScreen;