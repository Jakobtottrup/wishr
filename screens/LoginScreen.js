import React from 'react';
import {View, StyleSheet, Text, Keyboard, TouchableWithoutFeedback, Platform} from 'react-native';
import LoginForm from "../components/LoginForm";
import {Button, Input} from "react-native-elements";
import {Entypo} from "@expo/vector-icons";
import Colors from "../constants/colors";

const LoginScreen = props => {

    return (
        <View style={styles.main}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.loginForm}>
                    <Input
                        placeholder="Username"
                        leftIcon={<Entypo name="user" size={24} color={Colors.primary}/>}
                        blurOnSubmit
                        autoCorrect={false}
                    />
                    <Input
                        placeholder="Password"
                        leftIcon={<Entypo name="lock" size={24} color={Colors.primary}/>}
                        secureTextEntry={true}
                    />
                    <Button
                        buttonStyle={styles.loginButton}
                        type='outline'
                        raised={true}
                        title='Login'
                        onPress={() => {
                            props.navigation.navigate({routeName: 'Home'})
                        }}
                    />
                    <View style={styles.signUpContainer}>
                        <Button
                            type='outline'
                            raised={true}
                            title='Sign up'
                            buttonStyle={styles.loginButton}
                            onPress={() => {
                                props.navigation.navigate({routeName: 'Signup'})
                            }}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text>Todo: validate inputs, user authentication</Text>
            </View>
        </View>


    );
};

LoginScreen.navigationOptions = {
    headerTitleContainerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: 'Log In',
    headerStyle: {
        backgroundColor:  Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}
const styles = StyleSheet.create({
    main: {},
    loginForm: {
        margin: 40,
        paddingVertical: 30
    },

    loginButton: {
        color: Colors.accent,
        borderColor: Colors.accent,
        padding: 20,
        borderRadius: 10,
    },
    signUpContainer:{
        marginTop: 60
    }
});

export default LoginScreen;