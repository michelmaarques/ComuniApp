import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../global/styles/themes';

const DATA = [
    {
        id: '0',
        title: 'Posto de Saúde',
    },
    {
        id: '1',
        title: 'Escola',
    },
    {
        id: '2',
        title: 'CRAS - Assistência Social',
    },
    {
        id: '3',
        title: 'Outros',
    }
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function ContentInst() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            < TouchableOpacity onPress={() => { navigation.navigate('InsTDetalhe', DATA[0]) }}>
                <Item title={DATA[0].title} />
            </TouchableOpacity >
            < TouchableOpacity onPress={() => { navigation.navigate('InsTDetalhe', DATA[1]) }}>
                <Item title={DATA[1].title} />
            </TouchableOpacity >
            < TouchableOpacity onPress={() => { navigation.navigate('InsTDetalhe', DATA[2]) }}>
                <Item title={DATA[2].title} />
            </TouchableOpacity >


        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.secondary70,
        height: "20%",
        padding: 8,
        margin: 8,
        borderRadius: 12,
        flex: 1
    },
    headerCard: {
        flexDirection: 'row-reverse'
    },
    content: {
        backgroundColor: theme.colors.heading,
        flex: 1,
        borderRadius: 12,
        margin: 4
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontFamily: theme.fonts.text400,
        fontSize: 20,
        color: theme.colors.text,
    },
    item: {
        backgroundColor: theme.colors.heading,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 8
    },
    title: {
        fontSize: 24,
    },
})