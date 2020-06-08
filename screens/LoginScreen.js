import React, {useCallback, useEffect, useReducer, useState} from 'react';
import {
    View,
    StyleSheet,
    Alert,
    Keyboard,
    TouchableWithoutFeedback,
    Platform,
    KeyboardAvoidingView, ScrollView, ActivityIndicator
} from 'react-native';
import LoginForm from "../components/LoginForm";
import {Button} from "react-native-elements";
import Input from '../components/Input';
import {Entypo} from "@expo/vector-icons";
import Colors from "../constants/colors";
import {useDispatch} from 'react-redux';
import * as authActions from '../actions/auth';
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};
const LoginScreen = props => {
    /*const [isSignUp, setIsSignUp] = useState(false);
    const dispatch = useDispatch();
    const [error, setError] = useState();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    });
    const authHandler = () => {
        let action;
        if (isSignUp) {
            action = authActions.signup(formState.inputValues.email, formState.inputValues.password);
        } else {
            action = authActions.login(formState.inputValues.email, formState.inputValues.password);
        }
        dispatch(action);
    };

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier
            });
        },
        [dispatchFormState]
    );*/

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    });

    useEffect(() => {
        if (error) {
            console.log(error);
            //Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
        }
    }, [error]);

    const authHandler = async () => {
        let action;
        if (isSignup) {
            action = authActions.signup(
                formState.inputValues.email,
                formState.inputValues.password
            );
        } else {
            action = authActions.login(
                formState.inputValues.email,
                formState.inputValues.password
            );
        }
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(action);
            props.navigation.navigate('Home');
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier
            });
        },
        [dispatchFormState]
    );
    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={50}
            style={styles.screen}
        >

            <View style={styles.loginForm}>
                <ScrollView>
                    <Input
                        id='email'
                        placeholder="Email"
                        leftIcon={<Entypo name="email" size={24} color={Colors.primary}/>}
                        blurOnSubmit
                        autoCorrect={false}
                        autoCapitalize='none'
                        required
                        errorText='Please enter a valid email address.'
                        onInputChange={inputChangeHandler}
                    />
                    <Input
                        placeholder="Password"
                        id='password'
                        required
                        autoCapitalize='none'
                        errorText='Please enter a valid password'
                        onInputChange={inputChangeHandler}
                        leftIcon={<Entypo name="lock" size={24} color={Colors.primary}/>}
                        secureTextEntry={true}
                    />
                    <View style={styles.signUpContainer}>
                        {isLoading ? (
                            <ActivityIndicator size="small" color={Colors.primary} />
                        ) : (
                            <Button
                                title={isSignup ? 'Sign Up' : 'Login'}
                                color={Colors.primary}
                                onPress={authHandler}
                            />
                        )}
                    </View>
                    <View style={styles.signUpContainer}>
                        <Button
                            title={`Switch to ${isSignup ? 'Login' : 'Sign Up'}`}
                            color={Colors.accent}
                            onPress={() => {
                                setIsSignup(prevState => !prevState);
                            }}
                        />
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
/*
    return (<View style={styles.main}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.loginForm}>
                    <Input
                        placeholder="Username"
                        leftIcon={<Entypo name="user" size={24} color={Colors.primary}/>}
                        blurOnSubmit
                        autoCorrect={false}
                        autoCapitalize='none'
                        required
                        errorText='Please enter a valid email address.'
                        onInputChange={inputChangeHandler}
                    />
                    <Input
                        placeholder="Password"
                        id='password'
                        required
                        autoCapitalize='none'
                        errorText='Please enter a valid password'
                        onInputChange={inputChangeHandler}
                        leftIcon={<Entypo name="lock" size={24} color={Colors.primary}/>}
                        secureTextEntry={true}
                    />
                    <Button
                        buttonStyle={styles.loginButton}
                        type='outline'
                        raised={true}
                        title={isSignup ? 'Sign Up' : 'Login'}
                        onPress={authHandler/!*() => {

                            /!*props.navigation.navigate({routeName: 'Home'})*!/
                        }*!/}
                    />
                    <View style={styles.signUpContainer}>
                        <Button
                            type='outline'
                            raised={true}
                            title={`Switch to ${isSignup ? 'Login' : 'Sign Up'}`}
                            buttonStyle={styles.loginButton}
                            onPress={() => {
                                setIsSignup(prevState => !prevState);

                                /!*props.navigation.navigate({routeName: 'Signup'})*!/
                            }}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>);
*/
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