import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const AppDrawer = createDrawerNavigator();

import HomeScreen          from './pages/home';
import NoticiasScreen      from './pages/noticias';
import DenunciasScreen     from './pages/denuncias';
import LeiMariaPenhaScreen from './pages/leiMariaPenha';
import ContatosScreen      from './pages/contatos';
import DetalhesScreen       from './pages/detalhes';

export default function Routes(){
    return (
        <NavigationContainer theme={DarkTheme}>
          <AppDrawer.Navigator initialRouteName="home" drawerContentOptions={{activeTintColor: '#48537D'}} screenOptions={{}}>
            <AppDrawer.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
            <AppDrawer.Screen name="Noticias" component={NoticiasScreen} options={{ title: 'Notícias' }} />
            <AppDrawer.Screen name="Denuncias" component={DenunciasScreen} options={{ title: 'Denunciar' }} />
            <AppDrawer.Screen name="SobreLeiMariaPenha" component={LeiMariaPenhaScreen} options={{ title: 'Conheça a Lei' }} />
            <AppDrawer.Screen name="Contatos" component={ContatosScreen} options={{ title: 'Contatos' }} />
            <AppDrawer.Screen name="DetalhesNoticia" component={DetalhesScreen} options={{ drawerLabel: () => null, gestureEnabled: false, }} />
          </AppDrawer.Navigator>
        </NavigationContainer>
    );
}    