import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import * as PropTypes from "prop-types";
import CustomHeader from "../components/CustomHeader";
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = ({navigation, hasOpenHouse, openHouse}) => {
  let message = 'No open house right now please check back later';
  if (hasOpenHouse){
    message = `Welcome to the ${openHouse.name}`;
  }

  return (
      <View>
        <CustomHeader navigation={navigation} title="Home" />
        <ScrollView>
          <View style={{height:250,}}>
            <Image   
              style={styles.image}
              source={require('../assets/images/MBOHbanner.png')}>
            </Image>
          </View>
          <Text>{message}</Text>
        </ScrollView>
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

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  }
});