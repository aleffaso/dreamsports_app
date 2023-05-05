import { ReactNode } from 'react';
import { HttpResponse } from '../../infra/http/types';
export type UserType = {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  is_active: boolean;
};
export type UserResponseType = {
  user: UserType;
  token: string;
};

export type UserRefreshResponseType = {
  token: string;
  refreshToken: string;
};

export type AuthContextProps = {
  children: ReactNode;
};

export type AuthContextDataType = {
  user: UserResponseType['user'] | null;
  authenticate: AuthServicesTypes['authenticate'];
  // revalidateToken: AuthServicesTypes['revalidateToken'];
};

export type AuthServicesTypes = {
  authenticate: (email: string, password: string) => Promise<HttpResponse<UserResponseType>>;
  revalidateToken: (refreshToken: string) => Promise<HttpResponse<UserRefreshResponseType>>;
};
