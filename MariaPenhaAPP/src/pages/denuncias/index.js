import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import NavbarDefault from '../../custom/component/Navbar';
import DenunciasStyle from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormDenuncias from './form';

export default function Denuncias({navigation}) {
    return(
        <View style={DenunciasStyle.container}>
            <NavbarDefault pageName='Denunciar'></NavbarDefault>
            <KeyboardAwareScrollView behavior="padding">
                <ScrollView>
                    <FormDenuncias />
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    );
}