import React from "react";
import {StyleSheet, Text, View} from "react-native";
import * as PropTypes from "prop-types";
import Colors from "../../constants/Colors";
import color from 'color';
import Fonts from "../../constants/Fonts";

const ErrorElement = ({error}) =>
    (
        <View style={styles.item}>
            <Text style={styles.message}>{error.message}</Text>
        </View>
    );

ErrorElement.propTypes = {
    error: PropTypes.shape({
        action: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
    }),
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: color(Colors.errorBackground).lighten(0.9).rgb().toString(),
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    message: {
        fontFamily: Fonts.normalFont,
    }
});

export default ErrorElement;
