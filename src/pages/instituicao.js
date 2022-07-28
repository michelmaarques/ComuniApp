import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from '../components/header';
import ContentInst from '../components/contentInst';

export default function Instituicao() {
    return (
        <View style={styles.container}>
            <Header name={"Instituições"} />
            <ContentInst />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#451458",
        flex: 1
    }
})