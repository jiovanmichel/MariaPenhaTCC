import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import NavbarDefault from '../../custom/component/Navbar';
import Icone from '../../custom/component/Icone';
import Titulo from '../../custom/component/Titulo';
import SobreLeiStyle from './style';

export default function LeiMariaPenha({navigation}) {
    return(
        <View style={SobreLeiStyle.container}>
            <NavbarDefault pageName='Conheça a Lei'></NavbarDefault>
            <ScrollView>
                <Icone iconeNome="anchor"/>
                <Titulo titulo="Resumo da Lei"/>
                <View style={SobreLeiStyle.containerResumo}>
                    <Text style={SobreLeiStyle.descricaoLei}>
                        {'      '}
                        A Lei Maria da Penha, sancionada em 7 de agosto de 2006, como Lei n.º 11.340, visa proteger a mulher da violência doméstica e familiar. 
                        A lei ganhou este nome devido à luta da farmacêutica Maria da Penha para ver seu agressor condenado.
                    </Text>
                    <Text style={SobreLeiStyle.descricaoLei}>
                        {'      '}
                        A Lei cria mecanismos para coibir e prevenir a violência doméstica e familiar contra a mulher, nos termos do § 8º do art. 226 da Constituição Federal, da Convenção sobre a Eliminação de Todas as Formas de Violência contra a Mulher, da Convenção Interamericana para Prevenir, Punir e Erradicar a Violência Contra a Mulher e de outros tratados internacionais ratificados pela República Federativa do Brasil
                        Dispõe sobre a criação dos Juizados de Violência Doméstica e Familiar contra a Mulher e estabelece medidas de assistência e proteção às mulheres em situação de violência doméstica e familiar. 
                    </Text>
                    <Text style={SobreLeiStyle.descricaoLei}>
                        {'      '}
                        A lei serve para todas as pessoas que se identificam com o sexo feminino, heterossexuais e homossexuais. Isto quer dizer que as mulheres transexuais também estão incluídas.
                        Igualmente, a vítima precisa estar em situação de vulnerabilidade em relação ao agressor. Este não precisa ser necessariamente o marido ou companheiro: pode ser um parente ou uma pessoa do seu convívio.
                    </Text>
                    <Text style={SobreLeiStyle.descricaoLei}>
                        {'      '}
                        A Lei Maria da Penha alterou o Diploma Penal e possibilitou que agressores de mulheres no âmbito doméstico e familiar fossem presos em flagrante ou tenham prisão preventiva decretada.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}