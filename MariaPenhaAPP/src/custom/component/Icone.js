import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import IconeStyle from '../styles/IconeStyle';

export default function NavbarDefault(props){
    
    return(
        <View style={IconeStyle.container}>
            <View style={IconeStyle.circuloIcone}>
                <Feather name= {props.iconeNome} size={40} color="#D44E5A" />
            </View>
        </View>
    );
}