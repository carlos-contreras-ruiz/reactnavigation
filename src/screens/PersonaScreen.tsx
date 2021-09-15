import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';

/* interface RouteParams {
  id: number;
  nombre: string;
} */

interface Props extends NativeStackScreenProps<RootStackParams, 'persona'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  //const params = route.params as RouteParams;
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
      headerBackTitle: '', //Pone el nombre en el idioma del telefono para ios
    });
  }, []);

  return (
    <View>
      <Text>{params.nombre}</Text>
    </View>
  );
};
