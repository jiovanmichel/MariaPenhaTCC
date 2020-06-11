import React, { useState, useEffect} from 'react';
import { Text, View, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import NavbarDefault from '../../custom/component/Navbar';
import Titulo from '../../custom/component/Titulo';
import ContatosStyle from './style';
import avatarM from '../../../assets/avatarMasculino.jpg';
import avatarF from '../../../assets/avatarFeminino.png';
import api from '../../services/api';

export default function Contatos({navigation}) {
    const [ contatos, setContatos] = useState([]);

    async function carregarContatos(){
        const response = await api.get('contatos/index');
        setContatos(response.data)
    }

    useEffect(() => {
        carregarContatos();
    }, []); 
    
    function checkAvatar(contato){
        if(contato.sexo === 'M')
            return avatarM
        
        return avatarF
    }
    return(
        <View style={ContatosStyle.container}>
            <NavbarDefault pageName='Contatos'></NavbarDefault>
            <ScrollView>
                <View style={ContatosStyle.listaContatos}>
                    <FlatList
                        data={contatos}
                        keyExtractor= {contato => String(contato._id)}
                        renderItem={({ item: contato }) => (
                            <View style={ContatosStyle.cardContato} >
                                <View style={ContatosStyle.imagemDadosFlex}> 
                                    <View>  
                                        <Image source={checkAvatar(contato)} style={ContatosStyle.imagemContato} />
                                    </View>    
                                    <View>
                                        <Text style={ContatosStyle.nomeContato}>{contato.nome}</Text>
                                        <Text style={ContatosStyle.emailContato}>{contato.email}</Text>
                                        <Text style={ContatosStyle.foneContato}>{contato.telefone}</Text>
                                    </View>
                                </View>
                                <View style={ContatosStyle.obsContato}>
                                    <Feather name= "info" size={15} color="#D44E5A" />
                                    <Text style={ContatosStyle.textoObsContato}>{contato.observacao}</Text>
                                </View> 
                            </View>
                        )}
                        
                    />
                </View>
                <Titulo titulo="Envie suas dúvidas" />
            </ScrollView>
        </View>
    );
}
