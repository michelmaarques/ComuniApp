import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

import { AntDesign } from '@expo/vector-icons';

import { AuthContext } from '../../src/contexts/auth';
import { theme } from '../global/styles/themes';

import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);

    const { singIn } = useContext(AuthContext);


    function handleLogin() {
        singIn(email, password);
    }
    console.log(isChecked)
    console.log(isChecked2)

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Conecte-se {'\n'}com o seu {'\n'}bairro </Text>

                <Text style={styles.subtitle}>Verifique informações e {'\n'}avisos na sua região </Text >

            </View>

            <View style={styles.section}>
                <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} color={isChecked ? '#4630EB' : undefined} />
                <TouchableOpacity onPress={() => { navigation.navigate('TermoDeUso') }}>
                    <Text style={styles.paragraph}>
                        Concordo com o Termo de Uso
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
                <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} color={isChecked2 ? '#4630EB' : undefined} />
                <TouchableOpacity onPress={() => { navigation.navigate('PoliticaPrivacidade') }}>
                    <Text style={styles.paragraph}>Concordo com a Política de Privacidade</Text>
                </TouchableOpacity>
            </View>


            {isChecked && isChecked2 && <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <AntDesign name="google" size={24} color="black" />
                <Text style={styles.buttonText}>Entrar com Google</Text>
            </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: theme.fonts.title700,
        lineHeight: 40,
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
        fontFamily: theme.fonts.title500,
        lineHeight: 25
    },
    input: {
        width: '90%',
        height: 45,
        backgroundColor: '#A7A7A7',
        borderRadius: 4,
        marginBottom: 14,
        padding: 8,
    },
    button: {
        width: '90%',
        height: 45,
        backgroundColor: theme.colors.secondary70,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: '#000',
        marginHorizontal: 24
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12
    },
    paragraph: {
        fontSize: 15,
        color: theme.colors.heading,
    },
    checkbox: {
        margin: 8,
    },
})