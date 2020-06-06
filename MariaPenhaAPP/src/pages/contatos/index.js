import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavbarDefault from '../../custom/component/Navbar';
import ContatosStyle from './style';

export default function Contatos({navigation}) {
    return(
        <View style={ContatosStyle.container}>
            <NavbarDefault pageName='Contatos'></NavbarDefault>
        </View>
    );
}
