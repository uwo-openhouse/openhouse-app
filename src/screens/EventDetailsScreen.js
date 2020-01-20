import React from 'react';
import { View,Text, ScrollView, Image, StyleSheet } from 'react-native';
import CustomHeader from "../components/CustomHeader";


class EventDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <CustomHeader navigation={this.props.navigation} title="Event Details" /> */}
        <Text></Text>
      </View>
    );
  }
}

export default EventDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#E5E5E5',
  },
});
