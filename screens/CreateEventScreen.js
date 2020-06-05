import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input} from "react-native-elements";
import DateTimePicker from '@react-native-community/datetimepicker';

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

const styles = StyleSheet.create({
    main: {},
});

export default createEventScreen;