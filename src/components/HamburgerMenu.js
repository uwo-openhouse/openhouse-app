import React from "react";
import { Icon } from "react-native-elements";

const HamburgerMenu = props => {
  return (
    <Icon
      color="#fff"
      name="menu" 
      size={30} 
      onPress={() => props.navigation.toggleDrawer()}
    />
  );
};

export default HamburgerMenu;