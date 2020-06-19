import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import DetalhesStyle from './style';
import { Feather } from '@expo/vector-icons';

export default function Noticias({route, navigation}) {
    const noticia = route.params.noticia;

    return(
        <View style={DetalhesStyle.container}>
            <View style={DetalhesStyle.containerHeader}>
                <TouchableOpacity onPress={() => navigation.goBack()} style= {DetalhesStyle.menuNavegacao}>
                    <Feather name= "arrow-left" size={20} color="#fff" />
                </TouchableOpacity>
                
                <Text style={DetalhesStyle.nomePage}> Detalhes </Text>
                
                <TouchableOpacity onPress={() => null} style= {DetalhesStyle.menuNavegacao}>
                    <Feather name= "share-2" size={20} color="#fff" />
                </TouchableOpacity>
            </View>     
            <View style={{flex: 1}}>  
                <ScrollView style={DetalhesStyle.containerDetalhe} showsVerticalScrollIndicator={false}>
                    <View style={DetalhesStyle.containerImagem}>
                        <Image source={noticia.imagem ? require('../../../assets/avatarMasculino.jpg') : require('../../../assets/imagem1.jpg')} style= {DetalhesStyle.imagemNoticia} />
                    </View>
                    <View style={DetalhesStyle.containerNoticia}>
                        <Text style={DetalhesStyle.tituloNoticia}>{noticia.titulo}</Text>
                        <Text style={DetalhesStyle.categoriaNoticia}>{noticia.categoria.nome}</Text>
                        <Text style={DetalhesStyle.descricaoNoticia}>{noticia.descricao}</Text>
                        <View style={DetalhesStyle.hr}></View>
                        <View style={DetalhesStyle.rodapeNoticia}>
                            <Text style={DetalhesStyle.autorNoticia}>{noticia.autor}</Text>   
                            <Text style={DetalhesStyle.dataHoraNoticia}>{noticia.dataHora}</Text>
                        </View>
                    </View>
                    
                </ScrollView>
            </View>
        </View>
    );
}