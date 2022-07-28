import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../global/styles/themes';


export default function TermoDeUso() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title} >Termo de Uso</Text>
            </View>
            <WebView source={{ uri: 'https://drive.google.com/file/d/17rj_LTfkdzu8hacQt26tx2xp3gQsCEf3/view?usp=sharing' }} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#451458",
        flex: 1
    },
    header: {
        width: '100%',
        height: 104,
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.heading,
    }
})