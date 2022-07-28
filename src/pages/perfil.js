import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/header';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../global/styles/themes';
import { AuthContext } from '../contexts/auth';
import api from '../../service/api';

export default function Perfil() {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState([])
    const navigation = useNavigation();

    useEffect(() => {
        loadUser();
    }, [])

    async function loadUser() {
        try {
            let response = await api.post('getforemail', { "email": user.email })
            setUserData(response.data)
        } catch (error) {
            console.log(error, "Erro primeira busca")
        }
    }

    return (
        <>
            <View style={styles.container}>
                <Header name={"Perfil"} />
                {userData.length && userData[0].tipo === 0 ? <View /> : <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text style={styles.buttonText}>Moderar conteúdo</Text>
                </TouchableOpacity>}

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('TermoDeUso') }}>
                    <Text style={styles.buttonText}>Termo de Uso</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('PoliticaPrivacidade') }}>
                    <Text style={styles.buttonText}>Política de Privacidade</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('') }}>
                    <Text style={styles.buttonText}>Manual de Uso</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Login') }}>
                    <Text style={styles.buttonText}>Sair do Aplicativo</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        flex: 1,
    },
    button: {
        width: '90%',
        height: 45,
        backgroundColor: theme.colors.secondary70,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        marginTop: 50
    },
    buttonText: {
        fontSize: 20,
        color: '#000',
        marginHorizontal: 24
    }
})