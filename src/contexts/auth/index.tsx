import { createContext, useCallback, useState } from 'react';
import { AuthContextDataType, AuthContextProps, UserType } from './types';
import { parseCookies, setCookie } from 'nookies';
import { KEYS } from '../../constants';
import { authServices } from './services';
import { createJWTCookie } from '../../utils';
// import { createJWTCookie } from '../../utils';

export const AuthContext = createContext({} as AuthContextDataType);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<UserType | null>(() => {
    const user = parseCookies()[KEYS.STORAGE.USER.DATA];
    return user ? JSON.parse(user) : null;
  });

  const authenticate = useCallback(async (email: string, password: string) => {
    try {
      const response = await authServices.authenticate(email, password);

      if (response.error || response.data.message || response.data.statusCode) {
        return {
          data: {
            ...response.data
          },
          error: false
        };
      }

      setCookie(undefined, KEYS.STORAGE.USER.DATA, JSON.stringify(response.data.user));
      createJWTCookie(response.data.token, KEYS.STORAGE.USER.TOKEN);
      //TODO REFRESH TOKEN

      return {
        data: {
          ...response.data
        },
        error: false
      };
    } catch (error) {
      console.error(error);

      setUser(null);
      // destroyCookie(null, KEYS.STORAGE.USER.DATA, { path: '/' });
      // destroyCookie(null, KEYS.STORAGE.USER.TOKEN, { path: '/' });
      //TODO REFRESH TOKEN

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
    }
  }, []);
  return <AuthContext.Provider value={{ user, authenticate }}>{children}</AuthContext.Provider>;
};
