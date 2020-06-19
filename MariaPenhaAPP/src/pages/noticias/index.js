import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import NavbarDefault from '../../custom/component/Navbar';
import NoticiasStyle from './style';
import Icone from './../../custom/component/Icone'

export default function Noticias({route, navigation}) {
    // const contato = route.params.contato;
    const [ noticias, setNoticias] = useState([]);
    
    async function carregarNoticias(){
        const noticiasStatic = [
            {
                _id: '1',
                categoria: {nome: 'Categoria 1'},
                titulo: 'Titulo da Noticia 1',
                resumo: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                autor: 'Fulano da Silva',
                dataHora: '13/05/2020 12:58',
                imagem: ''
            },
            {
                _id: '2',
                categoria: {nome: 'Categoria 2'},
                titulo: 'Titulo da Noticia 2',
                resumo: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                autor: 'Ciclano da Silva',
                dataHora: '13/05/2020 12:58',
                imagem: ''
            },
            {
                _id: '3',
                categoria: {nome: 'Categoria 3'},
                titulo: 'Titulo da Noticia 3',
                resumo: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                autor: 'Beltrano da Silva',
                dataHora: '13/05/2020 12:58',
                imagem: ''
            
            },
            {
                _id: '4',
                categoria: {nome: 'Categoria 3'},
                titulo: 'Titulo da Noticia 3',
                resumo: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                autor: 'Beltrano da Silva',
                dataHora: '13/05/2020 12:58',
                imagem: ''
            },
            {
                _id: '5',
                categoria: {nome: 'Categoria 3'},
                titulo: 'Titulo da Noticia 3',
                resumo: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                autor: 'Beltrano da Silva',
                dataHora: '13/05/2020 12:58',
                imagem: ''
            }
        ]
        // const response = await api.get('noticias/index');
        // setNoticias(response.data)
        setNoticias(noticiasStatic)
    }

    useEffect(() => {
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
                                        <Text style={NoticiasStyle.dataHoraNoticia}>{noticia.dataHora}</Text>
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