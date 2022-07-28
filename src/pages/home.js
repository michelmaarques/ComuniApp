import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';


import { AuthContext } from '../contexts/auth';
import { styles } from './styles';

import Box from '../components/box';
import Card from '../components/card';
import Header from '../components/header';
import { Load } from '../components/load';
import { ListDivider } from '../components/listDivider';

import { useNavigation } from '@react-navigation/native';
import { theme } from '../global/styles/themes';
import api from '../../service/api'

export default function Home() {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState([])
    const navigation = useNavigation();
    const [avisos, setAvisos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadAvisos();
    })
    useEffect(() => {
        loadAvisos();
        loadUser();
    }, [])




    async function loadUser() {
        try {
            let response = await api.post('getforemail', { "email": user.email })
            if (response.data.length === 0) {
                const data = {
                    "nome": user.name,
                    "email": user.email,
                    "tipo": 0
                }
                let res = await api.post('createUser', data)

            }
            setUserData([response.data])
        } catch (error) { console.log(error, "Erro primeira busca") }
    }

    async function loadAvisos() {
        let response = await api.get('avisosAtivos');
        if (response)
            setAvisos(response.data);
        setLoading(false);
    }
    return (
        <>
            <View style={styles.container}>
                <Header name={"Início"} />
                {loading ? <Load /> :
                    <>
                        <FlatList
                            data={avisos}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Card key={item.id} nome={item.nome} descricao={item.descricao} id={item.id}
                                    data={item}
                                    onPress={() => { }} />
                            )}
                            ItemSeparatorComponent={() => <ListDivider />}
                            contentContainerStyle={{ paddingBottom: 69 }}
                            style={styles.matches}
                            showsVerticalScrollIndicator={false}
                        />
                    </>
                }


                <TouchableOpacity style={styles2.button} onPress={() => { navigation.navigate("AddAviso") }}>
                    <Text style={styles2.buttonText}>Adicionar</Text>
                </TouchableOpacity>

            </View>
            <Box />
        </>
    );
}

const styles2 = StyleSheet.create({
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
        margin: 20
    },
    buttonText: {
        fontSize: 20,
        color: '#000',
        marginHorizontal: 24
    }
})