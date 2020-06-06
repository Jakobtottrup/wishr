import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {Button, Header, ThemeProvider, Input} from 'react-native-elements';
//import {Ionicons} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from "./screens/LoginScreen";
import TextStyle from "./constants/textStyle";
import Colors from "./constants/colors";
import AppNavigator from "./navigation/AppNavigator";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import CreateGroupScreen from "./screens/CreateGroupScreen";
import CreateEventScreen from "./screens/CreateEventScreen";


const getFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
};

const theme = {
    Button: {
        raised: true,
    },
};

export default function App() {
    const [dataLoaded, setDataLoaded] = useState(false);


    if (!dataLoaded) {
        return <AppLoading startAsync={getFonts} onFinish={() => setDataLoaded(true)}
                           onError={(err) => console.log(err)}/>;
    }
    return (
        <ThemeProvider theme={theme}>
            {/*<Header centerComponent={{text: 'Gift Coordination', style: { color: '#fff', fontFamily: 'open-sans-bold',
                    fontSize: 24 }}}
            containerStyle={{
                backgroundColor: Colors.primary,
                fontFamily: 'open-sans-bold',
                fontSize: 24
            }}/>*/}
            <AppNavigator/>
{/*            <View>

                <LoginScreen/>
                <SignupScreen/>
                <HomeScreen/>
                <CreateGroupScreen/>
                <CreateEventScreen/>
                <ViewEventScreen/>
                <CreateGroupScreen/>

            </View>*/}

        </ThemeProvider>
    );
}


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
