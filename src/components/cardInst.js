import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { theme } from '../global/styles/themes';

export default function CardInst({ nome, descricao, data }) {
    console.log(data)
    return (
        <View style={styles.container}>

            <View style={styles.headerCard}>
                <Text style={styles.title}>{nome}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.text}>Endereço : {data.endereco}</Text>
                <Text style={styles.text}>Contato : {data.contato}</Text>
                <Text style={styles.text}>Atendimento : {data.horarioAtendimento}</Text>
                <Text style={styles.text}>Serviços : {data.servicos}</Text>
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
        flexDirection: 'row',
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
        borderRadius: 12,
        margin: 4
    },
    text: {
        textAlign: 'left',
        fontFamily: theme.fonts.text400,
        fontSize: 18,
        color: theme.colors.text,
        paddingVertical: 2,
        paddingHorizontal: 3,
        marginStart: 2
    }
})