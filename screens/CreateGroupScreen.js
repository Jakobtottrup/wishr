import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Button, CheckBox, Input, Text} from "react-native-elements";

const createGroupScreen = props => {
    return (
        <View style={styles.main}>
            <TouchableWithoutFeedback>
                <View style={styles.createGroupContainer}>
                    <Input
                        placeholder='Group Name'
                    />

                    <View style={styles.checkBoxWrapper}>
                        <Text h4>Group Type</Text>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                center
                                title='Family'
                                checked={false}
                            />
                            <CheckBox
                                center
                                title='Friends'
                                checked={false}
                            />
                            <CheckBox
                                center
                                title='Other'
                                checked={false}
                            />
                        </View>
                    </View>
                    <View style={styles.userList}>
                        <Text h4>Add User(s) to group</Text>
                        <Text>List of users:</Text>
                        <Button  type='outline' raised={true} title='Add user'/>
                    </View>

                    <View>
                        <Input
                            placeholder='E-mail invite'
                            keyboardType='email-address'/>
                            <Button raised={true} title='Send Invite'/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {},
    createGroupContainer: {},
    checkboxContainer: {
        flexDirection: 'row'
    },
    checkBoxWrapper: {
        justifyContent:'space-between',
        alignItems: 'center',
        marginVertical: 20,
        paddingVertical: 20,
    },
    userList:{
    }
});

export default createGroupScreen;