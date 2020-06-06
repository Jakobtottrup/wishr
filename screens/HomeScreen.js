import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {Text, Divider, Button} from "react-native-elements";
import Colors from "../constants/colors";
import LoginScreen from "./LoginScreen";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const homeScreen = props => {
    return (
        <View style={styles.main}>

            <View><Divider
                style={{height: 0.8, marginVertical: 20, width: 300, backgroundColor: Colors.primary}}/></View>
            {/*<Text h3>Create Group</Text>*/}
            <Button
                buttonStyle={styles.button}
                type='outline' raised={true}
                title='Create Group'
                onPress={() => {
                    props.navigation.navigate('CreateGroup');
                }}
            />


            <View><Divider
                style={{height: 0.8, marginVertical: 20, width: 300, backgroundColor: Colors.primary}}/></View>
            <Button
                buttonStyle={styles.button}
                type='outline' raised={true}
                title='Create Event'
                onPress={() => {
                    props.navigation.navigate('CreateEvent');
                }}
            />

            <View><Divider
                style={{height: 0.8, marginVertical: 20, width: 300, backgroundColor: Colors.primary}}/></View>
            <Text h3>List Active Events
            </Text>


            <Button buttonStyle={styles.button} type='outline' raised={true} title='View Event'/>

        </View>
    );
};

homeScreen.navigationOptions = navData => {
    return {
        headerTitleContainerStyle: {
            left: 0,
            right: 0,
            flex: 1,
            alignItems: 'center',
        },
        headerTitle: 'Home',
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
/*        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="My Groups"
                iconName='group'
                onPress={() => {
                    //console.log(navData.navigationOptions);
                    navData.navigation.toggleDrawer()
                }}
            />
        </HeaderButtons>,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='My Wishlist'
                    iconName='list'
                    onPress={() => {
                        navData.navigation.toggleDrawer()
                    }}
                />
            </HeaderButtons>*/
    }
}
const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
    },
    divider: {
        margin: 30,
        borderColor: 'black',
        borderWidth: 2
    },
    button: {
        width: 300,
        maxWidth: '80%'
    }
});

export default homeScreen;