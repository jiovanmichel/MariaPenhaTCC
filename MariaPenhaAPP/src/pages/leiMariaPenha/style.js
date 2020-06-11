import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
    containerResumo: {
        marginHorizontal: 15
    },
    descricaoLei: {
        fontSize: 16,
        lineHeight: 30,
        color: '#707070',
        marginBottom: 10
    }
});