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
export type AuthServicesTypes = {
  authenticate: (email: string, password: string) => Promise<HttpResponse<UserResponseType>>;
  revalidateToken: (refreshToken: string) => Promise<HttpResponse<UserRefreshResponseType>>;
};
