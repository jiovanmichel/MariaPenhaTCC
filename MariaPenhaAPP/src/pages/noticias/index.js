import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import NavbarDefault from '../../custom/component/Navbar';
import NoticiasStyle from './style';
import Icone from './../../custom/component/Icone'
import api from '../../services/api';
import Moment from 'moment';

export default function Noticias({route, navigation}) {
    // const contato = route.params.contato;
    const [ noticias, setNoticias] = useState([]);
    const [ categorias, setCategorias] = useState([]);

    async function carregarCategorias(){
        const response = await api.get('noticiaCategorias/index');
        setCategorias(response.data)
    }

    async function carregarNoticias(){

        const response = await api.get('noticias/index');
        setNoticias(response.data)
    }

    useEffect(() => {
        carregarCategorias();
        carregarNoticias();
    }, []); 
    

    return(
        <View style={NoticiasStyle.container}>
            <NavbarDefault pageName='Notícias'></NavbarDefault>
            <View style= {{flex: 1}}>
                <View>
                    <Icone iconeNome="info"/>
                </View>
                <View style={NoticiasStyle.containerFiltro}>

                </View>
                <ScrollView style={NoticiasStyle.containerListNoticias} showsVerticalScrollIndicator={false}>
                    <FlatList
                        data={noticias}
                        keyExtractor= {noticia => String(noticia._id)}
                        scrollEnabled={false}
                        renderItem={({ item: noticia }) => (
                            <View style={NoticiasStyle.containerNoticia}>
                                <TouchableOpacity onPress={() => navigation.navigate('DetalhesNoticia', {noticia})} >
                                    <Text style={NoticiasStyle.tituloNoticia}>{noticia.titulo}</Text>
                                    <Text style={NoticiasStyle.categoriaNoticia}>{noticia.categoria.nome}</Text>
                                    <Text style={NoticiasStyle.resumoNoticia}>{noticia.resumo}</Text>
                                    <View style={NoticiasStyle.hr}></View>
                                    <View style={NoticiasStyle.rodapeNoticia}>
                                        <Text style={NoticiasStyle.autorNoticia}>{noticia.autor}</Text>   
                                        <Text style={NoticiasStyle.dataHoraNoticia}>{Moment(noticia.data).add(12, 'hours').format('DD/MM/YYYY')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </ScrollView>
            </View>
        </View>
    );
}