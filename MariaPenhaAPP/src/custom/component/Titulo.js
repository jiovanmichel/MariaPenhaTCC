import React from 'react';
import { View, Text } from 'react-native';
import TituloStyle from '../styles/TituloStyle';

export default function NavbarDefault(props){
    return(
        <View style={TituloStyle.containerTitulo}>
            <Text style={TituloStyle.titulo}>{props.titulo}</Text>
            <View style={TituloStyle.hr}/>
        </View>
    );
}