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
import { Button } from 'react-native-elements';
import Colors from "../constants/Colors";

const HomeScreen = ({navigation, hasOpenHouse, openHouse}) => {
  let messageTitle = ''
  let messageBody = 'No open house right now please check back later';

  if (hasOpenHouse){
    messageBody = `We are delighted you have decided to attend ${openHouse.name}. Today, you have the opportunity to meet with professors, staff and students to learn why Western offers the best student experience among Canadian universities.`;
    messageTitle = `Welcome to the ${openHouse.name}`;
  }

  return (
      <View style={{flex: 1}}>
        <CustomHeader navigation={navigation} title="Home" />
        <ScrollView>
          <View style={{height:250,}}>
            <Image   
              style={styles.image}
              source={require('../assets/images/MBOHbanner.png')}>
            </Image>
          </View>
          <Text style={styles.title}>{messageTitle}</Text>
          <View style={styles.content} >
            <Text style={styles.messageBody}>{messageBody}</Text>
            <Button buttonStyle={styles.navButton} 
                    title="Schedule" 
                    onPress={() => navigation.navigate('Schedule')}></Button>
            <Button buttonStyle={styles.navButton} 
                    title="Planner" 
                    onPress={() => navigation.navigate('Planner')}></Button>
          </View>
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
  },
  title: {
    color: 'white',
    borderTopColor: 'white',
    borderTopWidth: 5,
    backgroundColor: Colors.westernPurple,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 35,
    fontFamily: 'bentonsans-bold',
    fontSize: 22  ,
    lineHeight: 28,
  },
  content:{
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  messageBody: {
    lineHeight: 18,
    fontFamily: 'bentonsans-book',
    marginHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 25,
    marginBottom: 10,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
  },
  navButton: {
    backgroundColor: Colors.westernPurple,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 5,
  }
});