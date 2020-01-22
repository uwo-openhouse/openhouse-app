import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import * as PropTypes from "prop-types";
import CustomHeader from "../components/CustomHeader";

const HomeScreen = ({navigation, hasOpenHouse, openHouse}) => {
  let message = 'No open house right now please check back later';
  if (hasOpenHouse){
    message = `Welcome to the ${openHouse.name}`;
  }

  return (
      <View>
        <CustomHeader navigation={navigation} title="Home" />
        <Text>{message}</Text>
      </View>
  );
};


HomeScreen.navigationOptions = {

  drawerLabel: 'Home',
  drawerIcon: () => (
      <Image
          source={require('../assets/images/robot-dev.png')}
          style={{width: 50, height: 50}}
      />
  ),
};

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  hasOpenHouse: PropTypes.bool.isRequired,
  openHouse: PropTypes.shape({
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    date: PropTypes.number.isRequired,
  }),
};

HomeScreen.defaultProps = {
  openHouse: null,
};

export default HomeScreen;
