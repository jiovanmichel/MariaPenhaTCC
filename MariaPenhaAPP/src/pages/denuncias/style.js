import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },

    containerIcone: {
        // width: '100%',
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%'
    },
    circuloIcone: {
        width: 80,
        height: 80,
        marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E9A6AC',
        borderRadius: 50
    },
    textoIcone: {
        width: 200,
        color: '#707070'
    }
});