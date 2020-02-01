import {Overlay} from "react-native-elements";
import React from "react";
import * as PropTypes from "prop-types";
import {Button, FlatList, Text, View, StyleSheet} from "react-native";
import ErrorElement from "./ErrorElement";
import Colors from "../../constants/Colors";
import color from 'color';


const ErrorPopup = ({hasErrors, errors, onDismiss}) => (
    <Overlay isVisible={hasErrors} windowBackgroundColor={color(Colors.errorBackground).fade(0.5).rgb().toString()}>
        <View style={styles.container}>
            <Text style={styles.title}>An error has occurred</Text>
            <FlatList data={errors} keyExtractor={(item, index) => String(index)}
                      renderItem={({item}) => (<ErrorElement error={item}/>)}/>
            <View>
                <Button color={Colors.errorBackground} onPress={onDismiss} title="Dismiss All"/>
            </View>
        </View>
    </Overlay>
);

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
    },
});


export default ErrorPopup;
