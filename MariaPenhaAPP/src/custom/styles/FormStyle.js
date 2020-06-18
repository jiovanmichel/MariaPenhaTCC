import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerForm: {
        marginHorizontal: 15,
        marginBottom: 15
    },
    containerInputs:{
        marginBottom: 15,
    },
    inputText:{ 
        minHeight: 50, 
        borderColor: '#707070', 
        borderWidth: 1, 
        paddingHorizontal: 15,
        marginBottom: 5,
        borderRadius: 4 
    },
    inputErros: {
        fontSize: 10, 
        color: '#D44E5A',
        fontWeight: 'bold'
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