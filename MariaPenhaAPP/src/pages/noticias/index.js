import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavbarDefault from '../../custom/component/Navbar';
import NoticiasStyle from './style';

export default function Noticias({navigation}) {
    return(
        <View style={NoticiasStyle.container}>
            <NavbarDefault pageName='Notícias'></NavbarDefault>
        </View>
    );
}