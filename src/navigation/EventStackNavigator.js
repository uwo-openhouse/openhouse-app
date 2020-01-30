import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import EventDetailsScreen from "../containers/screens/EventDetailsScreen";
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
            header:null,
        },
    }
);


export default createAppContainer(EventStack);
