import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import api from '../../service/api';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../global/styles/themes';

export default function ItemDoacao({ contato, idItem }) {
    const navigation = useNavigation();
    const [itemDoacao, setItemDoacao] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadItemDoacao();
    }, [])

    async function loadItemDoacao() {
        let response = await api.post(`getItem/${idItem}`);
        if (response)
            setItemDoacao(response.data);

        setLoading(false);
    }

    return (
        <View style={styles.item}>
            <View style={styles.headerCard}>
                <TouchableOpacity onPress={() => { navigation.navigate('ReportDoacao', { idItem }) }}>
                    <Entypo name="dots-three-horizontal" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Nome: {itemDoacao.length > 0 ? itemDoacao[0].nome : ""}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.subtitle}>Descrição:{itemDoacao.length > 0 ? itemDoacao[0].descricao : ""} </Text>
                <Text style={styles.subtitle}>Contato:{contato} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: theme.colors.secondary70,
        padding: 8,
        marginVertical: 8,
        borderRadius: 8,
        width: '100%',
        flex: 1,
    },
    headerCard: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginEnd: 8,
        marginStart: 8
    },
    content: {
        backgroundColor: theme.colors.heading,
        paddingVertical: 4,
        borderRadius: 12,
        margin: 4
    },
    title: {
        fontSize: 24,
    },
    subtitle: {
        fontSize: 18,
        padding: 8
    },
})