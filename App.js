import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import React, {useState} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from "react-redux";
import configureStore from "./src/configureStore";
import {getEvents} from "./src/actions/events";
import {getOpenHouses} from "./src/actions/openHouses";
import {getAreas} from "./src/actions/areas";
import {getLocations} from "./src/actions/locations";

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        );
    } else {
        const store = configureStore();
        store.dispatch(getLocations());
        store.dispatch(getAreas());
        store.dispatch(getOpenHouses());
        store.dispatch(getEvents());
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                    <AppNavigator/>
                </View>
            </Provider>
        );
    }
}

async function loadResourcesAsync() {
    await Promise.all([
        Asset.loadAsync([
            require('./src/assets/images/robot-dev.png'),
            require('./src/assets/images/robot-prod.png'),
        ]),
        Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            // We include SpaceMono because we use it in HomeScreen.js. Feel free to
            // remove this if you are not using it in your app
            'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf'),
        }),
    ]);
}

function handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
});
