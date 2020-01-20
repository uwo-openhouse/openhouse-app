import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  TouchableHighlight,
} from 'react-native';
import Colors from "../constants/Colors"

const DATA = [{
  title: '8:00 AM',
  data: [
    {
      id:"1",
      name: "Big important talk",
      description:"important stuff",
      department:"1",
      building:"1"
    },
    {
      id:"2",
      name: "Big important talk number 2",
      description:"important stuff",
      department:"2",
      building:"2"
      }
    ]
  },
  {
  title: '9:00 AM',
  data: [
    {
      id:"3",
      name: "Big important talk",
      description:"important stuff",
      department:"3",
      building:"3"
    },
    {
      id:"4",
      name: "Big important talk number 4",
      description:"important stuff",
      department:"4",
      building:"4"
      }
      ,
    {
      id:"4",
      name: "Big important talk number 4",
      description:"important stuff",
      department:"4",
      building:"4"
      }
      ,
    {
      id:"4",
      name: "Big important talk number 4",
      description:"important stuff",
      department:"4",
      building:"4"
      },
      {
        id:"4",
        name: "Big important talk number 4",
        description:"important stuff",
        department:"4",
        building:"4"
        }
    ]
  }
];

function Item(props) {
    return (
      <View style={{marginVertical: 5}}>
        <TouchableHighlight underlayColor="black" onPress={()=> { props.navigation.navigate('EventDetails');}}> 
          <View style={styles.item}>

            <View style={styles.timeContainer}>
              <Text style={styles.time}>{props.title}</Text>
            </View>

            <View style={styles.itemContentContainer}>
              <View style={styles.titleContainer}>
                <View style={styles.categoryDot}></View>
                <Text style={styles.title}>{props.title}</Text>
              </View>
              <Text style={styles.location}>{props.title}</Text>
            </View>

          </View>
        </TouchableHighlight>
      </View>
    );
  }

export default function ScheduleList(props) {
  

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item id={item.id} navigation={props.navigation} title={item.name} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    marginHorizontal: 0,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  header: {
    fontSize: 20,
    opacity: 0.5,
    marginHorizontal: 10,
    marginTop: 10,
  },

  title: {
    flexGrow: 1,
    fontSize: 24,
    color: Colors.WesternPurple,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',

  },
  itemContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    flex: 1,

  },
  time: {
    color:'#999999'
  },
  timeContainer: {
    marginRight: 8,
    width: 55,
  },

  location: {
    fontSize: 18,
    color: '#666666',
  },
  categoryDot:{
    flexGrow: 0,
    flexShrink: 0,
    top: 8,
    marginRight: 8,
    width: 16,
    height: 16,
    borderRadius: 16/2,
    backgroundColor: 'red'
  },
});