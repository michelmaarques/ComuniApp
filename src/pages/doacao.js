import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import Header from '../components/header';
import Content from '../components/content';
import ItemDoacao from '../components/itemDoacao';
import { Load } from '../components/load';
import api from '../../service/api';
import { ListDivider } from '../components/listDivider';

import { theme } from '../global/styles/themes';

import { useNavigation } from '@react-navigation/native';

export default function Doacao() {
    const navigation = useNavigation();
    const [doacoes, setDoacoes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadDoacoes();
    })

    useEffect(() => {
        loadDoacoes();
    }, [])



    async function loadDoacoes() {
        let response = await api.get('doacoesAtivas');
        if (response)
            setDoacoes(response.data);
        setLoading(false);
    }


    return (
        <View style={styles.container}>
            <Header name={"Doações"} />
            {loading ? <Load /> :
                <>
                    <FlatList
                        data={doacoes}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <ItemDoacao key={item.id} contato={item.contato} idItem={item.idItem}
                                data={item}
                                onPress={() => { }} />
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        contentContainerStyle={{ paddingBottom: 69 }}
                        style={styles.content}
                        showsVerticalScrollIndicator={false}
                    />
                </>
            }


            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("AddItemDoacao") }}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#451458",
        flex: 1,
        alignItems: 'center',
    },
    button: {
        width: '90%',
        height: 45,
        backgroundColor: theme.colors.secondary70,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
    },
    buttonText: {
        fontSize: 20,
        color: '#000',
        marginHorizontal: 24,
    },
    content: {
        width: '95%',
    }
})