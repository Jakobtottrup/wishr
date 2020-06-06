import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const MyWishListScreen = props => {
    return (
        <View style={styles.main}>
            <Text>My WishList Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default MyWishListScreen;