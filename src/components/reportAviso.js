import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import Header from './header';
import { theme } from '../global/styles/themes';
import { AuthContext } from '../contexts/auth';
import api from '../../service/api';
import { useNavigation } from '@react-navigation/native';

export default function ReportAviso({ route }) {
    const { user } = useContext(AuthContext);
    const [descricao, setDescricao] = useState('');
    const navigation = useNavigation();

    async function submit() {
        try {
            if (descricao !== '') {
                let dados = {
                    "descricao": descricao,
                    "idReportAviso": route.params.id,
                    "idReportItem": ""
                }
                const response = await api.post('createReport', dados)

                Alert.alert(
                    "Reporte realizado!",
                    "Um moderador realizará a análise!",
                    [

                        {
                            text: "OK",
                            onPress: () => navigation.navigate('Home')
                        }

                    ],
                    { cancelable: false }
                );

            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Header name={"Reportar Aviso"} />
            <View style={styles.content}>
                <Text style={styles.title}>Digite o motivo do reporte:</Text>
                <TextInput
                    placeholder='Digite o motivo'
                    placeholderTextColor={'white'}
                    style={styles.input}
                    onChangeText={input => setDescricao(input)}
                />

                <TouchableOpacity style={styles.button} onPress={submit}>
                    <Text style={styles.buttonText}>Enviar</Text>
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
        marginTop: 50,
        width: "90%",
    },
    input: {
        borderBottomWidth: 1,
        height: "20%",
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