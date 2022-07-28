import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import { theme } from '../global/styles/themes';

export default function Card({ nome, descricao, id }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.headerCard}>
                <TouchableOpacity onPress={() => { navigation.navigate('Report', { id }) }}>
                    <Entypo name="dots-three-horizontal" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>{nome}</Text>

            </View>
            <View style={styles.content}>
                <Text style={styles.text}>{descricao}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.secondary70,
        padding: 8,
        margin: 8,
        borderRadius: 12
    },
    headerCard: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginEnd: 8,
        marginStart: 8
    },
    title: {
        fontFamily: theme.fonts.text400,
        fontSize: theme.size.title
    },
    content: {
        backgroundColor: theme.colors.heading,
        paddingVertical: 4,
        borderRadius: 12,
        margin: 4
    },
    text: {
        textAlign: 'center',
        fontFamily: theme.fonts.text400,
        fontSize: 20,
        color: theme.colors.text,
    }
})