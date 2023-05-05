import { createContext, useState } from 'react';
import { AuthContextDataType, AuthContextProps, UserType } from './types';
import { destroyCookie, parseCookies } from 'nookies';
import { KEYS } from '../../constants';
import { authServices } from './services';
import { createJWTCookie } from '../../utils';

export const AuthContext = createContext({} as AuthContextDataType);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<UserType | null>(() => {
    const user = parseCookies()[KEYS.STORAGE.USER.DATA];
    return user ? JSON.parse(user) : null;
  });
  const authenticate = async (email: string, password: string) => {
    try {
      const response = await authServices.authenticate(email, password);
      console.log('antes do if ', response);
      if (response.error) {
        console.log('error context');
        throw new Error(response.messageError);
      }
      setUser({ ...response.data.user });
      createJWTCookie(JSON.stringify(response.data.user), KEYS.STORAGE.USER.DATA);
      createJWTCookie(response.data.token, KEYS.STORAGE.USER.TOKEN);
      //TODO REFRESH TOKEN
      console.log('context');
      return response;
    } catch (error) {
      setUser(null);
      destroyCookie(null, KEYS.STORAGE.USER.DATA, { path: '/' });
      destroyCookie(null, KEYS.STORAGE.USER.TOKEN, { path: '/' });
      //TODO REFRESH TOKEN
    }
    console.log('antes do return');
    return {
      data: {
        user: {
          id: '',
          name: '',
          email: '',
          admin: false,
          is_active: false
        },
        token: ''
      },
      error: true
    };
  };
  return <AuthContext.Provider value={{ user, authenticate }}>{children}</AuthContext.Provider>;
};
