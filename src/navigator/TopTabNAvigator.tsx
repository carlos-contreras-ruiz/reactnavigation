/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactScreen} from '../screens/ContactScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTabNAvigator = () => {
  return (
    <Tab.Navigator
      backBehavior="none"
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
