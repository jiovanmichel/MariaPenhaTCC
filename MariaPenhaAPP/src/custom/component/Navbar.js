import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import NavbarStyle from '../styles/NavbarStyle';
import { useNavigation } from '@react-navigation/native'; 

export default function NavbarDefault(props){
    const navigation = useNavigation();

    function navigationBack(){
        navigation.goBack();
    }
    function toggleDrawer(){
        navigation.toggleDrawer();
    }
    return(
        <View style={NavbarStyle.container}>
            <TouchableOpacity onPress={navigationBack} style= {NavbarStyle.menuNavegacao}>
                <Feather name= "arrow-left" size={20} color="#fff" />
            </TouchableOpacity>
            
            <Text style={NavbarStyle.nomePage}> {props.pageName} </Text>
            
            <TouchableOpacity onPress={toggleDrawer} style= {NavbarStyle.menuNavegacao}>
                <Feather name= "menu" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}