import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import EateryScreen from "../containers/screens/EateryScreen";
import EateryDetailsScreen from "../containers/screens/EateryDetailsScreen";

const EateryStack = createStackNavigator({
      Eateries: {
        screen: EateryScreen,
        navigationOptions: {
          headerShown: false,
        }
      },
      EateryDetails: {
        screen: EateryDetailsScreen,
      },
    },{
        initialRoutName: 'Eateries',
        defaultNavigationOptions: {
            header:null,
        },
    }
);

export default createAppContainer(EateryStack);
