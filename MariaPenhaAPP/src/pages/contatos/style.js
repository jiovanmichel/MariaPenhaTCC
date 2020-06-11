import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
    listaContatos:{
        marginHorizontal: 15,
        paddingBottom: 15,
        marginBottom: 30,
        borderBottomWidth: 2,
        borderBottomColor: '#f4f4f4'
    },
    cardContato: {
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: '#f4f4f47a',
        borderRadius: 10,
        padding: 15
    },
    imagemDadosFlex: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    imagemContato: {
        width: 75,
        height: 75,
        marginRight: 15,
        borderRadius: 40
    },
    nomeContato: {
        fontSize: 20,
        color: '#242F3E',
        marginBottom: 5,
        fontWeight: 'bold'
    },
    emailContato: {
        color: '#707070',
        marginBottom: 5
    },
    foneContato:{
        color: '#707070',
    },
    obsContato:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
    },
    textoObsContato: {
        marginLeft: 3,
        marginRight: 15,
        fontSize: 12
    },
    containerForm: {
        marginHorizontal: 15,
        marginBottom: 15
    },
    inputText:{ 
        minHeight: 50, 
        borderColor: '#707070', 
        borderWidth: 1, 
        paddingHorizontal: 15,
        marginBottom: 15,
        borderRadius: 4 
    },
    botaoSubmit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 38,
        backgroundColor: '#D44E5A',
        width: '100%',
        height: 60,
        paddingHorizontal: 15
        
    },
    textoBotaoSubmit: {
        color: '#fff',
        fontSize: 22,
    },
});