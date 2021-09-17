/* eslint-disable react-native/no-inline-styles */
import {DrawerScreenProps} from '@react-navigation/drawer';
//import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../theme/appTheme';

//interface Props extends NativeStackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);
  return (
    <View style={globalStyles.globalMargin}>
      <Text>Pagina1Screenn</Text>
      <Button title="Pagina2" onPress={() => navigation.navigate('pagina2')} />

      <Button title="Persona" onPress={() => navigation.navigate('persona')} />

      <Text>navegar con params</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...globalStyles.botonGrande,
            backgroundColor: '#5856D6',
          }}
          onPress={() =>
            navigation.navigate('persona', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Text style={globalStyles.btnGrandeTxt}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...globalStyles.botonGrande,
            backgroundColor: 'blue',
          }}
          onPress={() =>
            navigation.navigate('persona', {
              id: 2,
              nombre: 'Maria',
            })
          }>
          <Text style={globalStyles.btnGrandeTxt}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
