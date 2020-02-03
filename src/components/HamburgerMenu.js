import React from "react";
import { Icon } from "react-native-elements";
import Colors from "../constants/Colors";

const HamburgerMenu = props => {
  return (
    <Icon
      color="#fff"
      name="menu" 
      size={30}
      underlayColor={Colors.westernPurple}
      onPress={() => props.navigation.toggleDrawer()}
    />
  );
};

export default HamburgerMenu;