import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../context/authContext/AuthContext';

export const ContactScreen = () => {
  const {authState, signIn, signout} = useContext(AuthContext);
  return (
    <View>
      <Text>Contact screen</Text>
      {!authState.isLoggedIn ? (
        <TouchableOpacity onPress={() => signIn()}>
          <Text>Signin</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => signout()}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
