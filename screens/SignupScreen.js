import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SignupForm from "../components/SignupForm";

const signupScreen = props => {
    return (
        <View style={styles.main}>
            <SignupForm/>
            <View>
                <Text>Todo: validate inputs, user registration</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {},
});

export default signupScreen;