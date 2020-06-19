import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#D44E5A',
        width: '100%',
        height: 60,
        padding: 15,        
    },
    nomePage: {
        color: '#fff',
        fontSize: 22
    },
    containerDetalhe:{
        // margin: 15
    },
    containerImagem:{
        marginBottom: 30
    },
    imagemNoticia:{
        width: '100%',
        height: 220
    },
    containerNoticia:{
        margin: 15
    },
    tituloNoticia:{
        fontSize: 22,
        color: '#242F3E',
        marginBottom: 5
    },
    categoriaNoticia:{
        color: '#D44E5A',
    },
    descricaoNoticia:{
        color: '#242F3E',
        lineHeight: 22,
        marginVertical: 30
    },
    hr: {
        borderWidth: 0.3,
        borderColor: '#707070',
    },
    rodapeNoticia:{
        paddingVertical: 30,
        alignContent: 'space-between',
        flexDirection: 'row'
    },
    autorNoticia:{
        color: '#707070',
        fontSize: 12,
        width: '75%'
    },
    dataHoraNoticia: {
        width: '25%',
        color: '#707070',
        fontSize: 12,
        textAlign: "right",
        flex: 1
    }
});