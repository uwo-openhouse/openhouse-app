import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import CustomHeader from "../components/CustomHeader";
import contributors from "../constants/contributors";
import React from "react";
import {Linking} from 'expo';
import {Icon} from "react-native-elements";



const AboutScreen = ({navigation}) => (
    <View style={styles.container}>
        <CustomHeader navigation={navigation} title="About"/>
        <View style={styles.body}>
            <Text style={[styles.text, styles.underLinedText, styles.paddedText]}>This app was developed by students for Computer Science 4470Y</Text>
            <View style={styles.contributorList}>
                <Text style={[styles.contributorListHeader, styles.text,  styles.paddedText]}>Contributors</Text>
                {contributors.map((contributor, index) => (
                    <Text key={index} style={[styles.contributor, styles.text]}>{contributor}</Text>
                ))}
            </View>
            <TouchableOpacity style={[styles.githubLink]} onPress={() => Linking.openURL('https://github.com/uwo-openhouse')}>
                <Icon style={styles.githubIcon} name='github' type="font-awesome" color="#999999"/>
                <Text style={[styles.githubLinkText, styles.text]}>Check us out on Github</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#E5E5E5',
    },
    contributorList: {
        flex: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    contributorListHeader: {
        textAlign: 'center',
        width: '100%',
        fontWeight: 'bold',
    },
    contributor: {
        textAlign: 'center',
        width: '50%',
        marginBottom: 20,
    },
    githubIcon: {
        marginRight: 10,
    },
    githubLink: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        marginHorizontal: 16,
        borderColor: '#999',
    },
    githubLinkText: {
        alignSelf: 'center',
    },
    underLinedText: {
        borderColor: '#999',
        borderBottomWidth: 1,
    },
    paddedText:{
        paddingTop: 10,
        paddingBottom: 25,
        marginBottom: 10,
        marginHorizontal: 16,
    },
    text: {
        lineHeight: 18,
        fontFamily: 'bentonsans-book',

    },
    body: {
        flex: 1,
        height: 100,
    }
});

export default AboutScreen
