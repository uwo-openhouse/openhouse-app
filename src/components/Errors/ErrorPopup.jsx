import {Overlay} from "react-native-elements";
import React from "react";
import * as PropTypes from "prop-types";
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import ErrorElement from "./ErrorElement";
import Colors from "../../constants/Colors";
import color from 'color';
import Fonts from "../../constants/Fonts";


const ErrorPopup = ({hasErrors, errors, onDismiss}) => {
    const errorMessages = [];
    const filteredErrors = errors.filter((error => {
        const isDuplicate = errorMessages.includes(error.message);
        errorMessages.push(error.message);
        return !isDuplicate;
    }));
    return (
        <Overlay isVisible={hasErrors} windowBackgroundColor={color(Colors.errorBackground).fade(0.5).rgb().toString()}>
            <View style={styles.container}>
                <Text style={styles.title}>An error has occurred</Text>
                <FlatList data={filteredErrors} keyExtractor={(item, index) => String(index)}
                          renderItem={({item}) => (<ErrorElement error={item}/>)}/>
                <View>
                    <TouchableOpacity style={styles.button} onPress={onDismiss}>
                        <Text style={styles.buttonText}>Dismiss</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Overlay>
    );
};

ErrorPopup.propTypes = {
    hasErrors: PropTypes.bool.isRequired,
    onDismiss: PropTypes.func.isRequired,
    errors: PropTypes.arrayOf(
        PropTypes.shape({
            action: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
        })).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    title: {
        fontSize: 32,
        fontFamily: Fonts.semiBoldFont,
        textAlign: 'center'
    },
    button: {
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: Colors.errorBackground,
    },
    buttonText: {
        color: 'white',
        fontFamily: Fonts.normalFont,
        textTransform: 'uppercase',
        textAlign: 'center'
    }

});


export default ErrorPopup;
