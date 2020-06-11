import React, { useState, useEffect} from 'react';
import { Text, View, ScrollView, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import NavbarDefault from '../../custom/component/Navbar';
import Titulo from '../../custom/component/Titulo';
import ContatosStyle from './style';
import avatarM from '../../../assets/avatarMasculino.jpg';
import avatarF from '../../../assets/avatarFeminino.png';
import api from '../../services/api';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Contatos({navigation}) {
    const [ contatos, setContatos] = useState([]);
    const [valueNome, onChangeNome] = useState('');
    const [valueTelefone, onChangeTelefone] = useState('');
    const [valueEmail, onChangeEmail] = useState('');
    const [valueDescricao, onChangeDescricao] = useState('');
    const [texto, changeTexto] = useState('');

    async function carregarContatos(){
        const response = await api.get('contatos/index');
        setContatos(response.data)
    }
    async function enviarDuvida(){
        changeTexto(`${valueNome} - ${valueTelefone} - ${valueEmail} - ${valueDescricao}`);
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
            <KeyboardAwareScrollView behavior="padding">
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
                            <Text>{texto}</Text>
                    <View style={ContatosStyle.containerForm}>
                        <TextInput
                            style={ContatosStyle.inputText}
                            placeholder="Nome"
                            placeholderTextColor="#707070"
                            onChangeText={text => onChangeNome(text)}
                            value={valueNome}
                        />
                        <TextInput
                            style={ContatosStyle.inputText}
                            placeholder="Telefone"
                            placeholderTextColor="#707070"
                            onChangeText={text => onChangeTelefone(text)}
                            value={valueTelefone}
                        />
                        <TextInput
                            style={ContatosStyle.inputText}
                            placeholder="Email"
                            placeholderTextColor="#707070"
                            onChangeText={text => onChangeEmail(text)}
                            value={valueEmail}
                        />
                        <TextInput
                            style={[ContatosStyle.inputText, {height: 130}]}
                            placeholder="Descreva sua dúvida"
                            placeholderTextColor="#707070"
                            multiline={true}
                            editable
                            onChangeText={text => onChangeDescricao(text)}
                            value={valueDescricao}
                        />

                        <TouchableOpacity onPress={() => enviarDuvida()} style= {ContatosStyle.botaoSubmit}>
                            <Feather name= "chevron-left" size={20} color="#D44E5A" />
                            <Text style={ContatosStyle.textoBotaoSubmit}>Enviar</Text>
                            <Feather name= "chevron-right" size={20} color="#E9A6AC" />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    );
}
