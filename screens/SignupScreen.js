import React from 'react';
import {View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback, Platform} from 'react-native';
import SignupForm from "../components/SignupForm";
import {Button, Input} from "react-native-elements";
import {Entypo} from "@expo/vector-icons";
import Colors from "../constants/colors";
import LoginScreen from "./LoginScreen";

const signupScreen = props => {
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
                        placeholder="Email"
                        keyboardType='email-address'
                        leftIcon={<Entypo name="email" size={24} color={Colors.primary}/>}
                        blurOnSubmit
                        autoCorrect={false}
                    />
                    <Input
                        placeholder="Password"
                        leftIcon={<Entypo name="lock" size={24} color={Colors.primary}/>}
                        secureTextEntry={true}
                    />
                    <View style={styles.signUpContainer}>
                        <Button
                            type='outline'
                            raised={true}
                            title='Sign up'
                            buttonStyle={styles.loginButton}
                            onPress={() => {
                                props.navigation.replace('Home');
                            }}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text>Todo: validate inputs, user registration</Text>
            </View>
        </View>
    );
};
signupScreen.navigationOptions = {
    headerTitleContainerStyle: {
        left: 0,
        right: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: 'Sign Up',
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

export default signupScreen;