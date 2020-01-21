import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import EventDetailsScreen from "../screens/EventDetailsScreen";

import Colors from "../constants/Colors"
import ScheduleScreen from "../containers/screens/ScheduleScreen";


const EventStack = createStackNavigator({
      Schedule: {
        screen: ScheduleScreen,
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
);



export default createAppContainer(EventStack);
