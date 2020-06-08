import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import AppNavigator from "./navigation/AppNavigator";
import ReduxThunk from 'redux-thunk';
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";

import authReducer from './reducers/auth';
import {ThemeProvider} from "react-native-elements";

const rootReducer = combineReducers({
/*    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer,*/
    auth: authReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const theme = {
    Button: {
        raised: true,
    },
};
const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
};


export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => {
                    setFontLoaded(true);
                }}
            />
        );
    }
    return (
        <ThemeProvider theme={theme}>
        <Provider store={store}>
            <AppNavigator />
        </Provider>
        </ThemeProvider>
    );
}

/*export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);


    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => {
                    setFontLoaded(true);
                }}
            />
        );
    }
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}*/


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginForm: {
    }
});
