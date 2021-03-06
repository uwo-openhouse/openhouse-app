import React from 'react';

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import PlannerStack from "./PlannerStackNavigator";
import ScheduleStack from "./ScheduleStackNavigator";
import EateryStack from "./EateryStackNavigator";
import HomeScreen from "../containers/screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import Colours from "../constants/Colors"

const MainDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  ScheduleStack: {
    screen: ScheduleStack,
    navigationOptions: {
      drawerLabel: 'Schedule',
    }
  },
  PlannerStack: {
    screen: PlannerStack,
    navigationOptions: {
      drawerLabel: 'Planner',
    }
  },
  EateryStack: {
    screen: EateryStack,
    navigationOptions: {
      drawerLabel: 'Eateries',
    }
  },
  About: {
    screen: AboutScreen,
  },
},{
    contentOptions:{
      activeTintColor: Colours.westernPurple
    }
  }
);


export default createAppContainer(MainDrawerNavigator);
