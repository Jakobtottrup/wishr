import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import Colors from "../constants/colors";

const loginForm = props => {
    return (
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
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
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

export default loginForm;