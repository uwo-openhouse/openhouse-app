import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import EventDetailsScreen from "../containers/screens/EventDetailsScreen";
import ScheduleScreen from "../containers/screens/ScheduleScreen";

const ScheduleStack = createStackNavigator({
      Schedule: {
        screen: ScheduleScreen,
        navigationOptions: {
          headerShown: false,
        }
      },
      EventDetails: {
        screen: EventDetailsScreen
      },
    },{
        initialRoutName: 'Schedule',
        defaultNavigationOptions: {
            headerShown:false,
        },
    }
);


export default createAppContainer(ScheduleStack);
