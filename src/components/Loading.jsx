import Colors from "../constants/Colors";
import {ActivityIndicator, StyleSheet} from "react-native";
import React from "react";


const Loading = () => (
    <ActivityIndicator style={styles.loading} size="large" color={Colors.westernPurple} />
);

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Loading;
