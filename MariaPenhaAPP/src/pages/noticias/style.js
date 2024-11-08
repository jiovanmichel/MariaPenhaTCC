import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
    containerListNoticias:{
        marginHorizontal: 15,
    },
    containerNoticia:{
        borderWidth: 1,
        borderColor: '#707070',
        marginBottom: 15
    },
    tituloNoticia:{
        fontSize: 22,
        color: '#242F3E',
        margin: 15
    },
    categoriaNoticia:{
        color: '#D44E5A',
        paddingHorizontal: 15,
    },
    resumoNoticia:{
        margin: 15,
        color: '#242F3E',
        lineHeight: 20,
    },
    hr: {
        borderWidth: 0.3,
        borderColor: '#707070',
    },
    rodapeNoticia:{
        paddingHorizontal: 15,
        paddingVertical: 10,
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