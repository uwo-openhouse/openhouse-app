import React from 'react';
import { Image, Text } from 'react-native';

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";


import HomeScreen from "../screens/HomeScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import SettingsScreen from "../screens/SettingsScreen";
import EventDetailsScreen from "../screens/EventDetailsScreen";
import EventStack from "./EventStackNavigator";


const MainDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  EventStack: {
    screen: EventStack,
    navigationOptions: {
      drawerLabel: 'Schedule',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/images/robot-dev.png')}
          style={{width: 50, height: 50}}
        />
      ),
    }
  },
  Settings: {
    screen: SettingsScreen
  }
});




export default createAppContainer(MainDrawerNavigator);