import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import {FontAwesome} from '@expo/vector-icons';
import Colors from '../constants/colors';

const CustomHeaderButton = props => {
    return (
        <HeaderButton
            {...props} //FORWARDING Props is mandatory
            IconComponent={FontAwesome}
            iconSize={23}
            color={Platform.OS === 'android'? 'white': Colors.primary}
        />
    );
};

const styles = StyleSheet.create({
    main: {

    },
});

export default CustomHeaderButton;