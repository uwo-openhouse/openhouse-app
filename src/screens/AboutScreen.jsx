import {Dimensions, StyleSheet, Text, View} from "react-native";
import CustomHeader from "../components/CustomHeader";
import contributors from "../constants/contributors";
import React from "react";
import {Linking} from 'expo';
import {Button, Icon} from "react-native-elements";
import Hyperlink from 'react-native-hyperlink'
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import {ScrollView} from "react-native-gesture-handler";


const AboutScreen = ({navigation}) => (

    <View style={styles.container}>
        <CustomHeader navigation={navigation} title="About"/>
        <ScrollView>
            <View style={styles.body}>
                <Text style={[styles.text, styles.underLinedText, styles.paddedText, styles.header]}>This app was
                    developed
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
                <View style={styles.paddedText}>
                    <Hyperlink linkDefault linkStyle={styles.link}>
                        <Text style={[styles.text, styles.overLinedText, styles.lowerHeader, styles.emailText]}>
                            If you have any questions about becoming a Western student, please email welcome@uwo.ca.
                        </Text>
                    </Hyperlink>
                    <Hyperlink
                        linkDefault
                        linkStyle={styles.link}
                        linkText={ url => url === 'https://www.instagram.com/choosewesternu/' ? '@choosewesternu' : url }
                    >
                        <Text style={[styles.text]}>
                            Don't want to miss anything? Follow along on Instagram at https://www.instagram.com/choosewesternu/.
                        </Text>
                    </Hyperlink>
                </View>
            </View>
        </ScrollView>
    </View>

);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: Colors.background,
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
        marginBottom: 10,
    },
    link: {
        color: Colors.linkColor,
        textDecorationLine: 'underline',
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
    },
    githubIcon: {
        marginRight: 5,
        paddingRight: 4,
    },
    underLinedText: {
        borderColor: Colors.lineColor,
        borderBottomWidth: 1,
    },
    overLinedText: {
        borderColor: Colors.lineColor,
        borderTopWidth: 1,
    },
    paddedText: {
        paddingTop: 10,
        paddingBottom: 25,
    },
    text: {
        lineHeight: 18,
        fontFamily: Fonts.normalFont,
    },
    header: {
        marginBottom: 10,
        paddingTop: 15
    },
    lowerHeader: {
        marginBottom: 0,
        paddingTop: 15
    },
    body: {
        marginHorizontal: 16,
        height: Math.max(Dimensions.get("screen").height - 125, 500),
    },
    emailText: {
        paddingBottom: 10
    }});

export default AboutScreen
