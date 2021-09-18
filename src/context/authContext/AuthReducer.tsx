import {AuthState} from './AuthContext';

export type AuthAction =
  | {type: 'signIn'}
  | {type: 'changeFabIcon'; payload: string}
  | {type: 'logout'};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'algun usuario random',
      };
    case 'changeFabIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };

    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined,
      };

    default:
      return state;
  }
};
