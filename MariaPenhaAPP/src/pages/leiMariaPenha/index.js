import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavbarDefault from '../../custom/component/Navbar';
import SobreLeiStyle from './style';

export default function LeiMariaPenha({navigation}) {
    return(
        <View style={SobreLeiStyle.container}>
            <NavbarDefault pageName='Conheça a Lei'></NavbarDefault>
        </View>
    );
}