import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';


import Header from '../components/header';

export default function Onibus() {
    return (
        <View style={styles.container}>
            <Header name={"Ônibus"} />
            <WebView source={{ uri: 'https://expressofronteiradoeste.com.br/itinerario' }} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#451458",
        flex: 1
    }
})