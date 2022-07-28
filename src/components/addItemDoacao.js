import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Header from './header';
import { theme } from '../global/styles/themes';
import api from '../../service/api';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/auth';

export default function AddItemDoacao() {
    const { user } = useContext(AuthContext);
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [contato, setContato] = useState('');
    const [foto, setFoto] = useState('data img');
    console.log(user)


    async function submit() {
        try {
            if (nome !== '') {
                if (descricao !== '') {
                    if (contato !== '') {
                        let dados = {
                            "nome": nome,
                            "descricao": descricao,
                            "contato": contato,
                            "email": user.email,
                            "foto": foto
                        }
                        console.log(dados)
                        const response = await api.post('createDoacaoPorEmail', dados)

                        Alert.alert(
                            "Você tem certeza que deseja publicar essa forma de contato!",
                            "A forma de contato ficará pública para os demais usuários por 15 dias!",
                            [

                                {
                                    text: "OK",
                                    onPress: () => navigation.navigate('Home')
                                }

                            ],
                            { cancelable: false }
                        );
                    }
                }

            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Header name={"Adicionar Item"} />
            <View style={styles.content}>
                <Text style={styles.title}>Nome do Item:</Text>
                <TextInput
                    placeholder='Digite um nome'
                    placeholderTextColor={"white"}
                    style={styles.input}
                    onChangeText={input => setNome(input)}
                />
                <Text style={styles.title}>Descrição do Item:</Text>
                <TextInput
                    placeholder='Digite a descrição'
                    placeholderTextColor={"white"}
                    style={styles.input}
                    onChangeText={input => setDescricao(input)}
                />
                <Text style={styles.title}>Contato:</Text>
                <TextInput
                    placeholder='Digite a forma de contato'
                    placeholderTextColor={"white"}
                    style={styles.input}
                    onChangeText={input => setContato(input)}
                />

                <TouchableOpacity style={styles.button} onPress={submit}>
                    <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        flex: 1
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: theme.fonts.text500,
        fontSize: 20,
        color: theme.colors.heading,
        marginTop: 30,
        width: "90%",
    },
    input: {
        borderBottomWidth: 1,
        height: "15%",
        width: "90%",
        fontSize: 16,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading
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