import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import EateryScreen from "../containers/screens/EateryScreen";

const EateryStack = createStackNavigator({
      Eateries: {
        screen: EateryScreen,
        navigationOptions: {
          headerShown: false,
        }
      },
    },{
        initialRoutName: 'Eateries',
        defaultNavigationOptions: {
            header:null,
        },
    }
);

export default createAppContainer(EateryStack);
