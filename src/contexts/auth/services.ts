import { KEYS } from '../../constants';
import { HttpClient } from '../../infra/http';
import { AuthServicesTypes } from './types';

export const authServices: AuthServicesTypes = {
  authenticate: async <T>(email: string, password: string) => {
    const { result } = await HttpClient<T>('POST', {
      host: KEYS.HOST.API_URL,
      path: '/user/authenticate',
      data: { email, password },
      validations: { codeSuccess: 200, messageError: 'Oops! Algo deu errado' }
    });
    console.log('authenticate ', result);
    return result;
  },
  revalidateToken: async <T>(refreshToken: string) => {
    const { result } = await HttpClient<T>('POST', {
      host: KEYS.HOST.API_URL,
      path: '/user/revalidate-token',
      data: { refreshToken },
      validations: { codeSuccess: 200, messageError: 'Oops! Algo deu errado' }
    });
    return result;
  }
};
