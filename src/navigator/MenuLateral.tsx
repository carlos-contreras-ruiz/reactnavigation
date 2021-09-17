import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React from 'react';
import {SettingsScreen} from '../screens/SettingsScreen';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {globalStyles} from '../theme/appTheme';
import {Tabs} from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <MenuContent {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={globalStyles.avatarContainer}>
        <Image
          source={{
            uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif',
          }}
          style={globalStyles.avatar}
        />
      </View>

      <View style={globalStyles.menuContainer}>
        <TouchableOpacity
          style={globalStyles.menuBoton}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={globalStyles.menuItem}>Navegacion Tabs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.menuBoton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={globalStyles.menuItem}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
