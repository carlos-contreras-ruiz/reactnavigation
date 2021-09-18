import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/authContext/AuthContext';
import {colors} from '../theme/appTheme';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1');
  }, []);
  const {changeFabIcon} = useContext(AuthContext);

  return (
    <View>
      <Text>Iconos</Text>

      <TouchableOpacity onPress={() => changeFabIcon('rocket')}>
        <Icon name="rocket" size={30} color={colors.primary} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => changeFabIcon('airplane-outline')}>
        <Icon name="airplane-outline" size={30} color="#900" />
      </TouchableOpacity>
    </View>
  );
};
