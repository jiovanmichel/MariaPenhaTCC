import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },

    menuNavegacao:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 10,
        backgroundColor: '#fff',
        width: '100%',
        height: 60,
        padding: 15,
    },
    containerNavbar: {},

    containerLogo: {
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 15,
        marginTop: 15
    },  
    logoMariaPenha: {
        width: 150,
        height: 150,
        alignItems: 'center'
    },

    containerBotoes:{
        alignItems: 'center',
        paddingHorizontal: 30
    },
    botoesNavegacao: {
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
    textoBotoesNavegacao: {
        color: '#fff',
        fontSize: 22,
    },

    containerRodape:{
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 30
    },  
    textoRodape: {
        color: '#707070',
        fontSize: 18,
    },
});