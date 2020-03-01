import { StyleSheet } from 'react-native'
import Colors from "./Colors";
import Fonts from "./Fonts";

export default StyleSheet.create({
    header: {
        fontSize: 16,
        opacity: 0.5,
        marginHorizontal: 15,
        marginVertical: 6,
        fontFamily: Fonts.normalFont,
    },
    emptyListMsg:{
        margin: 10,
        fontSize: 16,
        opacity: 0.5,
        marginHorizontal: 15,
        marginVertical: 6,
        fontFamily: Fonts.normalFont,
    },
    scheduleIcon: {
        marginVertical: 10,
        marginLeft: 10,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        paddingTop: 12,
        paddingBottom: 12,
        paddingHorizontal: 15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    title: {
        flex: 1,
        flexGrow: 1,
        fontSize: 18,
        lineHeight: 20,
        fontFamily: Fonts.normalFont,
        color: Colors.westernPurple,
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
        fontSize: 14,
        color:'#999999',
        textAlign: 'center',
    },
    timeContainer: {
        marginRight: 16,
    },

    location: {
        fontSize: 16,
        lineHeight: 18,
        fontFamily: Fonts.normalFont,
        color: '#666666',
        marginTop: 6,
    },
    categoryDot:{
        flexGrow: 0,
        flexShrink: 0,
        top: 3,
        marginRight: 8,
        width: 16,
        height: 16,
        borderRadius: 16/2,
    },
});
