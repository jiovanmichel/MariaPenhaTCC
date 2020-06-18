import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },

    containerIcone: {
        marginVertical: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
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
        color: '#707070',
        lineHeight: 20
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 10,
        alignItems: 'center'
    },
    checkboxInput: {
        alignSelf: "center",
    },
    checkboxLabel: {
        marginLeft: 8,
        fontWeight: 'bold',
        color: '#707070'
    },
});