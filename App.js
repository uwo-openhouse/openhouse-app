import 'react-native-gesture-handler';
import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import React, {useState} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { PersistGate } from 'redux-persist/integration/react'
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from "react-redux";
import configureStore from "./src/configureStore";
import ErrorPopup from "./src/containers/Errors/ErrorPopup";
import Loading from "./src/components/Loading";
import Colors from "./src/constants/Colors";
import {getAll} from "./src/actions";

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
        const {store, persistor} = configureStore();
        store.dispatch(getAll());
        return (
            <Provider store={store}>
                <PersistGate loading={(<Loading/>)} persistor={persistor}>
                    <View style={styles.container}>
                        {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                        <AppNavigator/>
                        <ErrorPopup/>
                    </View>
                </PersistGate>
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
            'icomoon': require('./src/assets/fonts/icomoon.ttf'), //custom icons
            // We include SpaceMono because we use it in HomeScreen.jsx. Feel free to
            // remove this if you are not using it in your app
            'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf'),
            'bentonsans-medium': require('./src/assets/fonts/BentonSans-Medium.otf'),
            'bentonsans-book': require('./src/assets/fonts/BentonSans-Book.otf'),
            'bentonsans-bold': require('./src/assets/fonts/BentonSans-Bold.otf'),
            'bentonsans-regular': require('./src/assets/fonts/BentonSans-Regular.otf'),
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
        backgroundColor: Colors.background,
    },
});
