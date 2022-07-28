import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { theme } from '../global/styles/themes';
import Header from './header';
import CardInst from './cardInst';
import { ListDivider } from './listDivider';
import { Load } from './load';
import api from '../../service/api';

export default function InsTDetalhe({ route }) {
    const [instituicoes, setInstituicoes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadInst();
    }, [])



    async function loadInst() {
        let response = await api.post(`getInstTipo/${route.params.id}`);
        if (response)
            setInstituicoes(response.data);
        setLoading(false);
    }
    return (
        <View style={styles.container}>
            <Header name={route.params.title} />
            {loading ? <Load /> :
                <>
                    <FlatList
                        data={instituicoes}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <CardInst key={item.id} nome={item.nome} id={item.id}
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


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
    },
    headerCard: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginEnd: 8,
        marginStart: 8
    },
    title: {
        fontFamily: theme.fonts.text400,
        fontSize: theme.size.title
    },
    content: {
        backgroundColor: theme.colors.heading,
        borderRadius: 12,
        margin: 4
    },
    text: {

        textAlign: 'center',
        fontFamily: theme.fonts.text400,
        fontSize: 20,
        color: theme.colors.text,
    }
})