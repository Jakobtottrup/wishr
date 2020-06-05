import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LoginForm from "../components/LoginForm";

const loginScreen = props => {
    return (
        <View style={styles.main}>
            <LoginForm/>
            <View>
                <Text>Todo: validate inputs, user authentication, proper navigation</Text>
            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    main: {},
});

export default loginScreen;