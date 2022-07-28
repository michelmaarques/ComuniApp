import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../global/styles/themes';



export function ListDivider() {
    return (
        <View
            style={[
                styles.container,
                {
                    marginVertical: 6,
                    // marginTop: 2,
                    //marginBottom: 31,
                }
            ]}
        />
    );
}


export const styles = StyleSheet.create({
    container: {
        height: 1,
        width: '78%',
        alignSelf: 'flex-end',
        backgroundColor: theme.colors.secondary40,
    }
});