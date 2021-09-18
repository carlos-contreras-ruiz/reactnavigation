import React, {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

//Como luce el state
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

//Initial state
export const authInitialState: AuthState = {
  isLoggedIn: false,
};

//interface para decirle a React como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFabIcon: (iconName: string) => void;
  signout: () => void;
}

//crear contexto
export const AuthContext = createContext({} as AuthContextProps);

//componente provider el state
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeFabIcon = (iconName: string) => {
    dispatch({type: 'changeFabIcon', payload: iconName});
  };

  const signout = () => {
    dispatch({type: 'logout'});
  };

  return (
    <AuthContext.Provider value={{authState, signIn, changeFabIcon, signout}}>
      {children}
    </AuthContext.Provider>
  );
};
