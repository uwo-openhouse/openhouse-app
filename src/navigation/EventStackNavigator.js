import { View,Text, ScrollView, Image, StyleSheet, Icon } from 'react-native';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import ScheduleScreen from "../screens/ScheduleScreen";
import EventDetailsScreen from "../screens/EventDetailsScreen";

import Colors from "../constants/Colors"

import CustomHeader from "../components/CustomHeader";


const EventStack = createStackNavigator({
      Schedule: {
        screen: ScheduleScreen,
        navigationOptions: ({ navigation }) => ({

          })
      },
      EventDetails: {
        screen: EventDetailsScreen
      },
    },{
        initialRoutName: 'Schedule',
        defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: Colors.WesternPurple,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          },
          headerBackTitleVisible: false,
          headerTitleAlign: 'center'
    }
)
  

  
export default createAppContainer(EventStack);