import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1');
  }, []);

  return (
    <View>
      <Text>Iconos</Text>
      <Icon name="rocket" size={30} color="#900" />
      <Icon name="airplane-outline" size={30} color="#900" />
    </View>
  );
};
