/**
 * Transforms px to rem format
 * @param value number
 * @returns font rem
 */

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
