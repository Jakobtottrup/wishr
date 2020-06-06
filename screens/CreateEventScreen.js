import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {Input} from "react-native-elements";
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from "../constants/colors";

const createEventScreen = props => {
    return (
        <View style={styles.main}>
            <Input
                placeholder='Event Name'
            />
            <DateTimePicker value={123}/>
        </View>
    );
};
createEventScreen.navigationOptions = {
    headerTitleContainerStyle: {
        left: 0,
        right: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: 'Create Event',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}
const styles = StyleSheet.create({
    main: {},
});

export default createEventScreen;