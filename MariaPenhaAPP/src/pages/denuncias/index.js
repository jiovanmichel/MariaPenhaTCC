import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavbarDefault from '../../custom/component/Navbar';
import DenunciasStyle from './style';

export default function Denuncias({navigation}) {
    return(
        <View style={DenunciasStyle.container}>
            <NavbarDefault pageName='Denunciar'></NavbarDefault>
        </View>
    );
}