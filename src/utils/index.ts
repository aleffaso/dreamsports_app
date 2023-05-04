/**
 * Transforms px to rem format
 * @param value number
 * @returns font rem
 */

import jwtDecode, { JwtPayload } from 'jwt-decode';
import { ProductImages } from '../types';
import { setCookie } from 'nookies';

interface ITransformFont {
  toRem: (value: number) => string;
}

export const transformFont: ITransformFont = {
  toRem: (value: number) => {
    return `${value / 16}rem`;
  }
};

export const formatCurrency = (value: string | number) => {
  value === null || undefined ? (value = 0.0) : isNaN(Number(value)) ? (value = 0.0) : value;
  return String(Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
};

export const currentYear = () => {
  return new Date().getFullYear();
};

export const currentDateTime = () => {
  return new Date().toLocaleString() + '';
};

export const normalizeStringValue = (value: string) => {
  return value != null
    ? value
        .toString()
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '') + (value ?? '')
    : '';
};

export const findMainImage = (images: ProductImages[] | undefined) => {
  if (!images) return 'failed_image.png';

  const image = images?.find((value) => value.main)?.src;
  if (image) {
    return image;
  }
  return images[0].src;
};

export const removeSpecialChars = (string: string) => {
  return string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]|_/g, '')
    .replace(/\d+/g, '');
};

export const _localStorage = {
  get: (key: string) => {
    return localStorage.getItem(key) ?? '';
  },
  set: (key: string, value: string) => {
    return localStorage.setItem(key, value);
  },
  remove: (key: string) => {
    return localStorage.removeItem(key);
  }
};

export const createJWTCookie = (token: string, key: string, path?: string) => {
  const decodeAccessToken = jwtDecode<JwtPayload>(token);
  const expirationAccessToken = (decodeAccessToken.exp ?? 0) - (decodeAccessToken.iat ?? 0);
  setCookie(undefined, key, token, {
    maxAge: expirationAccessToken,
    path: path ?? '/'
  });
};
