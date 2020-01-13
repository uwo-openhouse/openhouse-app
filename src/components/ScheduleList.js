import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
} from 'react-native';


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

function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

export default function ScheduleList() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item.name} />}
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
    backgroundColor: '#f9c2ff',
    padding: 25,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
});
