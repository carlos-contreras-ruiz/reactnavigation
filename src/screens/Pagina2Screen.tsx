import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../theme/appTheme';

export const Pagina2Screen = () => {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Page 2',
      headerBackTitle: '', //Pone el nombre en el idioma del telefono para ios
    });
  }, []);
  return (
    <View style={globalStyles.globalMargin}>
      <Text>Pagina2Screen</Text>
      <Button title="Pagina3" onPress={() => navigator.navigate('pagina3')} />
    </View>
  );
};
