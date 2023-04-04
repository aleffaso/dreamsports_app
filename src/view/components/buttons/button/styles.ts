import styled, { css } from 'styled-components';
import { Props } from '.';
import { DisplayFlexCenter } from '../../../../styles';
import { transformFont } from '../../../../utils';

export const Wrapper = styled.button<{
  variant: Props['variant'];
  rounded?: boolean;
  color: Props['color'];
}>`
  cursor: pointer;
  padding: 0 16px;
  height: 42px;
  border-width: 0px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.green.g600};
  background-color: ${({ theme }) => theme.colors.green.g600};
  color: ${({ theme }) => theme.colors.neutral.n100};
  font-size: ${transformFont.toRem(18)};
  font-weight: 400;
  ${DisplayFlexCenter}
  gap: 8px;
  &:hover {
    color: ${({ theme }) => theme.colors.green.g600};
    background: transparent;
  }

  ${({ color, theme }) =>
    color &&
    css`
      ${color === 'primary' &&
      css`
        background: ${({ theme }) => theme.colors.green.g600};
        border-color: ${({ theme }) => theme.colors.green.g600};
        &:hover {
          color: ${({ theme }) => theme.colors.green.g600};
          background: transparent;
        }
      `}
      ${color === 'neutral' &&
      css`
        background: ${({ theme }) => theme.colors.neutral.n600};
        border-color: ${({ theme }) => theme.colors.neutral.n600};
        &:hover {
          color: ${({ theme }) => theme.colors.neutral.n600};
          background: transparent;
        }
      `}
      ${color === 'success' &&
      css`
        background: ${({ theme }) => theme.colors.blue.b600};
        border-color: ${({ theme }) => theme.colors.blue.b600};
      `}
      ${color === 'warning' &&
      css`
        background: ${({ theme }) => theme.colors.warning.w400};
        border-color: ${({ theme }) => theme.colors.warning.w400};
      `}
      ${color === 'error' &&
      css`
        background: ${({ theme }) => theme.colors.red.r400};
        border-color: ${({ theme }) => theme.colors.red.r400};
      `}
      ${color === 'transparent' &&
      css`
        color: ${({ theme }) => theme.colors.neutral.n600};
        background: ${({ theme }) => theme.colors.shades.white};
        border-color: ${({ theme }) => theme.colors.shades.white};
      `}
      &:hover {
        color: ${({ theme }) => theme.colors.neutral.n400};
      }
    `}

  ${({ variant }) =>
    variant &&
    css`
      ${variant === 'outline' &&
      css`
        background: transparent;
      `}
    `}

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 25px;
    `}

  &:disabled {
    border-color: ${({ theme }) => theme.colors.neutral.n700};
    color: ${({ theme }) => theme.colors.neutral.n200};
    background: ${({ theme }) => theme.colors.neutral.n700};
    cursor: not-allowed;
  }
`;
