import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Divider, Button} from "react-native-elements";
import Colors from "../constants/colors";

const homeScreen = props => {
    return (
        <View style={styles.main}>
            <Text h1>Home</Text>

            <View><Divider style={{height: 0.8, marginVertical: 20, width: 300, backgroundColor: Colors.primary}}/></View>
            {/*<Text h3>Create Group</Text>*/}
            <Button buttonStyle={styles.button} type='outline' raised={true} title='Create Group'/>


            <View><Divider style={{height: 0.8, marginVertical: 20, width: 300, backgroundColor: Colors.primary}}/></View>
            <Button buttonStyle={styles.button} type='outline' raised={true} title='Create Event'/>

            <View><Divider style={{height: 0.8, marginVertical: 20, width: 300, backgroundColor: Colors.primary}}/></View>
            <Text h3>List Active Events
            </Text>

            <View>
                <Text>Slide Menu LEFT:</Text>
                <Text>My Groups (click on users for profiles)</Text>

                <Text>Slide Menu RIGHT:</Text>
                <Text>My Wishlist (list with shop links)</Text>
            </View>
            <Button buttonStyle={styles.button} type='outline' raised={true} title='View Event'/>

        </View>
    );
};

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