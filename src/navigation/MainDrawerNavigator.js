import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";


import HomeScreen from "../screens/HomeScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import SettingsScreen from "../screens/SettingsScreen";

const MainDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Links: {
    screen: ScheduleScreen
  },
  Settings: {
    screen: SettingsScreen
  }
});

export default createAppContainer(MainDrawerNavigator);