import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';

import { theme } from '../global/styles/themes';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Favila Terminal',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Vera Cruz - Dr Romário',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Vera Cruz - Santos Dumont',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571esda2sas',
        title: 'Restinga - Capão do Angico',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa4497f64',
        title: 'Vera Cruz - Dr Romário',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d12175',
        title: 'Vera Cruz - Santos Dumont',
    }

];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function Content() {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
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