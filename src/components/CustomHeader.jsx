import React from "react";
import { Header } from "react-native-elements";
import Colors from "../constants/Colors"
import * as PropTypes from "prop-types";

import HamburgerMenu from "./HamburgerMenu.js";

const CustomHeader = ({navigation, title, children}) => {
  return (
    <Header
      leftComponent={<HamburgerMenu navigation={navigation} />}
      centerComponent={{
        text: title,
        style: { color: "#fff", fontWeight: "bold" },
      }}
      statusBarProps={{ barStyle: "light-content" }}
      containerStyle={{
        backgroundColor: Colors.westernPurple,
        borderBottomWidth: 0,
      }}
      rightComponent={children}
    />
  );
};

CustomHeader.propTypes = {
    navigation: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
};

CustomHeader.defaultProps = {
    children: null,
};


export default CustomHeader;
