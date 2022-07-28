import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import { theme } from '../global/styles/themes';

export default function Header({ name }) {
    const navigation = useNavigation();
    const { heading } = theme.colors;
    return (
        <View style={styles.container}>
            {(name === "Início") ? (<View />) : (<TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={heading}
                />
            </TouchableOpacity>)}

            <Text style={styles.title} >{name}</Text>

            {(name === "Perfil") ? (<View />) : (<TouchableOpacity onPress={() => { navigation.navigate("Perfil") }}>
                <Feather
                    name="user"
                    size={24}
                    color={heading}
                />
            </TouchableOpacity>)}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 104,
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.heading,
    }
});