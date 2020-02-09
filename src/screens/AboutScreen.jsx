import {StyleSheet, Text, View} from "react-native";
import CustomHeader from "../components/CustomHeader";
import contributors from "../constants/contributors";
import React from "react";
import {Linking} from 'expo';
import {Button, Icon} from "react-native-elements";
import Colors from "../constants/Colors";


const AboutScreen = ({navigation}) => (
    <View style={styles.container}>
        <CustomHeader navigation={navigation} title="About"/>
        <View style={styles.body}>
            <Text style={[styles.text, styles.underLinedText, styles.paddedText, styles.header]}>This app was developed
                by 4th-year students as their capstone project for Computer Science 4470Y.</Text>
            <View style={[styles.contributorList, styles.underLinedText]}>
                <Text style={[styles.contributorListHeader, styles.text, styles.paddedText]}>Contributors</Text>
                {contributors.map((contributor, index) => (
                    <Text key={index} style={[styles.contributor, styles.text]}>{contributor}</Text>
                ))}
            </View>
            <Button
                buttonStyle={styles.githubButton}
                title="Check us out on Github"
                icon={(<Icon iconStyle={styles.githubIcon} name='github' type="font-awesome" color="white"/>)}
                onPress={() => Linking.openURL('https://github.com/uwo-openhouse')}
            />
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
    githubButton: {
        backgroundColor: Colors.westernPurple,
        borderRadius: 25,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 16,
    },
    githubIcon:{
        marginRight: 5,
        paddingRight: 4,
    },
    underLinedText: {
        borderColor: '#999',
        borderBottomWidth: 1,
    },
    paddedText: {
        paddingTop: 10,
        paddingBottom: 25,
        marginBottom: 10,
        marginHorizontal: 16,
    },
    text: {
        lineHeight: 18,
        fontFamily: 'bentonsans-book',
    },
    header: {
        paddingTop: 15
    },
    body: {
        flex: 1,
        height: 100,
    }
});

export default AboutScreen
