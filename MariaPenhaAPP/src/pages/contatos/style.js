import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },

    containerContato: {
        marginBottom: 10,
        marginTop: 10,
        marginHorizontal: 15,
        backgroundColor: '#f4f4f47a',
        padding: 15,
        borderRadius: 10
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
    }
});