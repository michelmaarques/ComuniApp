import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../global/styles/themes';


export default function Box() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate("Onibus") }}>
                <Ionicons name="bus" size={64} color="white" />
                <Text style={styles.text}>Ônibus</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate("Doacao") }}>
                <MaterialCommunityIcons name="charity" size={64} color="white" />
                <Text style={styles.text}>Doação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate("Instituicao") }}>
                <MaterialIcons name="account-balance" size={64} color="white" />
                <Text style={styles.text}>Instituições</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#451458",
        flexDirection: 'row',

    },
    box: {
        width: "30%",
        padding: 12,
        marginStart: 8,
        alignItems: 'center',

    },
    text: {
        fontSize: 16,
        color: theme.colors.heading,
        fontWeight: 'bold'
    }
})