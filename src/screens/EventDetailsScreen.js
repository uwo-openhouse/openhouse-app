import React from 'react';
import { View,Text, ScrollView, Image, StyleSheet } from 'react-native';

class EventDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Event Details',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Content Here</Text>
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
