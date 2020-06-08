import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavbarDefault from '../../custom/component/Navbar';
import NoticiasStyle from './style';

export default function Noticias({route, navigation}) {
    const contato = route.params.contato;

    return(
        <View style={NoticiasStyle.container}>
            <NavbarDefault pageName='Notícias'></NavbarDefault>

            <View>
                <Text>
                    {contato.nome}
                    {route.params.id}
                </Text>
            </View>
        </View>
    );
}