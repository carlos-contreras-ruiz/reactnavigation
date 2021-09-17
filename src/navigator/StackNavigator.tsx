import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pagina3Screen} from '../screens/Pagina3Screen';
import {Pagina1Screen} from '../screens/Pagina1Screen';
import {Pagina2Screen} from '../screens/Pagina2Screen';
import {PersonaScreen} from '../screens/PersonaScreen';

export type RootStackParams = {
  pagina1: undefined;
  pagina2: undefined;
  pagina3: undefined;
  persona: {id: number; nombre: string};
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  //initialRouteName="pagina2"
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, //esconde la barra
        headerStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="pagina1"
        options={{title: 'Pagina 1'}}
        component={Pagina1Screen}
      />
      <Stack.Screen
        name="pagina2"
        options={{title: 'Pagina 2'}}
        component={Pagina2Screen}
      />
      <Stack.Screen
        name="pagina3"
        options={{title: 'Pagina 3'}}
        component={Pagina3Screen}
      />
      <Stack.Screen
        name="persona"
        options={{title: 'Persona'}}
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};
