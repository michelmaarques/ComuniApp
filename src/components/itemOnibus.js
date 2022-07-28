import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { theme } from '../global/styles/themes';

export default function ItemOnibus() {

    return (
        <View style={styles.item}>
            <Text style={styles.title}> nome da linha</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: theme.colors.heading,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 8
    },
    title: {
        fontSize: 24,
    },
})