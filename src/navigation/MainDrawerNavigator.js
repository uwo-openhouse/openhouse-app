import React from 'react';

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import SettingsScreen from "../screens/SettingsScreen";
import EventStack from "./EventStackNavigator";
import HomeScreen from "../containers/screens/HomeScreen";


const MainDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  EventStack: {
    screen: EventStack,
    navigationOptions: {
      drawerLabel: 'Schedule',
    }
  },
  Settings: {
    screen: SettingsScreen
  }
});




export default createAppContainer(MainDrawerNavigator);
