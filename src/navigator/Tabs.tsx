/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
//import {Tab2Screen} from '../screens/Tab2Screen';
//import {Tab3Screen} from '../screens/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {Text} from 'react-native';
import {TopTabNAvigator} from './TopTabNAvigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
        elevation: 0,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string;

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
              break;
            case 'TopTabNAvigator':
              iconName = 'basketball-outline';
              break;
            case 'StackNavigator':
              iconName = 'bookmark-outline';
              break;

            default:
              iconName = '';
              break;
          }
          return <Icon name={iconName} size={15} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: colors.primary,
        },
      })}>
      <Tab.Screen
        name="Tab1Screen"
        options={{
          //tabBarIcon: props => <Text style={{color: props.color}}>Icono</Text>,
        }}
        component={Tab1Screen}
      />
      <Tab.Screen name="TopTabNAvigator" component={TopTabNAvigator} />
      <Tab.Screen name="StackNavigator" component={StackNavigator} />
    </Tab.Navigator>
  );
};
