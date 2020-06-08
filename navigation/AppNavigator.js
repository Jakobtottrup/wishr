import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from "../screens/SignupScreen";
import HomeScreen from "../screens/HomeScreen";
import CreateEventScreen from "../screens/CreateEventScreen";
import ViewEventScreen from "../screens/ViewEventScreen";
import ViewHostScreen from "../screens/ViewHostScreen";
import CreateGroupScreen from "../screens/CreateGroupScreen";
import MyGroupsScreen from "../screens/MyGroupsScreen";
import MyWishListScreen from "../screens/MyWishListScreen";
import {FontAwesome} from '@expo/vector-icons';
import Colors from "../constants/colors";
import React from "react";

/*const GroupSideMenu = createDrawerNavigator({
    MyGroups: MyGroupsScreen
})*/
const WishListSideMenu = createDrawerNavigator({
        MyWishList: MyWishListScreen
    },
    {
        drawerPosition: 'right'
    })

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    CreateGroup: CreateGroupScreen,
    CreateEvent: CreateEventScreen,
    ViewEvent: ViewEventScreen,
    ViewHost: ViewHostScreen,
});

const GroupsMainListNavigator = createBottomTabNavigator({
        Home: {
            screen: AppNavigator,
            navigationOptions:{
                tabBarIcon: (tabInfo) => {
                    return <FontAwesome name='home' size={25} color={Colors.primary}/>
                }
            }
        },
        MyGroups: {
            screen: MyGroupsScreen,
            navigationOptions:{
                tabBarIcon: (tabInfo) => {
                    return <FontAwesome name='group' size={25} color={Colors.primary}/>
                },
                tabBarLabel: 'My Groups'

            }
        },
        MyWishList: {
            screen: MyWishListScreen,
            navigationOptions:{
                tabBarIcon: () => {
                    return <FontAwesome name='list-ol' size={25} color={Colors.primary}/>
                },
                tabBarLabel: 'My Wish List'
            }
        }
    },
    {
        order: [ 'MyGroups','Home', 'MyWishList'],
        initialRouteName: 'Home',

    })


/*const MainNavigator = createDrawerNavigator(
    {
        Main: AppNavigator,
        MyGroups:MyGroupsScreen,
        MyWishList: WishListSideMenu,
    },
    {
        drawerPosition: 'left',
    }
)*/

const AuthNavigator = createStackNavigator({
    Auth: LoginScreen
})

const MainNavigator = createSwitchNavigator({
    Auth: AuthNavigator,
    Main: GroupsMainListNavigator
})
export default createAppContainer(MainNavigator);

/*
export default createAppContainer(createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App:
}));*/
