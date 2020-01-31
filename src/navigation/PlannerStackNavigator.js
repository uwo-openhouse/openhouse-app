import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import EventDetailsScreen from "../containers/screens/EventDetailsScreen";
import PlannerScreen from "../containers/screens/PlannerScreen";


const PlannerStack = createStackNavigator({
      Planner: {
        screen: PlannerScreen,
        navigationOptions: {
          headerShown: false,
        }
      },
      EventDetails: {
        screen: EventDetailsScreen
      },
    },{
        initialRoutName: 'Planner',
        defaultNavigationOptions: {
            header:null,
        },
    }
);


export default createAppContainer(PlannerStack);
