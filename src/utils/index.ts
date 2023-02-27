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
