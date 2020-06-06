import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import NavbarDefault from '../../custom/component/Navbar';
import StyleHome from './style';
import iconMariaPenha from '../../../assets/iconMariaPenha.png'

export default function Home({navigation}) {
    return(
        <View style={StyleHome.container}>
            <StatusBar barStyle = "dark-content" />

            <View style={StyleHome.containerNavbar}>                
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} style= {StyleHome.menuNavegacao}>
                    <Feather name= "menu" size={30} color="#D44E5A" />
                </TouchableOpacity>
            </View>

            <View style={StyleHome.containerLogo}>
                <Image source={iconMariaPenha} style= {StyleHome.logoMariaPenha} />
            </View>
            
            <View style={StyleHome.containerBotoes}>
                <TouchableOpacity onPress={() => navigation.navigate('Noticias')} style= {StyleHome.botoesNavegacao}>
                    <Text />
                    <Text style={StyleHome.textoBotoesNavegacao}>Notícias</Text>
                    <Feather name= "chevron-right" size={20} color="#E9A6AC" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('Denuncias')} style= {StyleHome.botoesNavegacao}>
                    <Text />
                    <Text style={StyleHome.textoBotoesNavegacao}>Denunciar</Text>
                    <Feather name= "chevron-right" size={20} color="#E9A6AC" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('SobreLeiMariaPenha')} style= {StyleHome.botoesNavegacao}>
                    <Text />
                    <Text style={StyleHome.textoBotoesNavegacao}>Conheça a Lei</Text>
                    <Feather name= "chevron-right" size={20} color="#E9A6AC" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('Contatos')} style= {StyleHome.botoesNavegacao}>
                    <Text />
                    <Text style={StyleHome.textoBotoesNavegacao}>Contatos</Text>
                    <Feather name= "chevron-right" size={20} color="#E9A6AC" />
                </TouchableOpacity>
            </View>

            <View style={StyleHome.containerRodape}>
                <Text style={StyleHome.textoRodape}>Lei Maria da Penha - Lei 11340/06 </Text>
                <Text style={StyleHome.textoRodape}>Lei nº 11.340, de 7 de agosto de 2006</Text>
            </View>
        </View>
    );
}
