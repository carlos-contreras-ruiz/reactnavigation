import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  btnGrandeTxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  menuBoton: {
    marginVertical: 10,
  },
  menuItem: {
    fontSize: 20,
  },
});

export const colors = {
  primary: '#5856D6',
};
