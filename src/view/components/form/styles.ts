import styled, { css } from 'styled-components';
import { transformFont } from '../../../utils';

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.neutral.n700};
  padding: 10px 0;
`;

export const ErrorField = styled.span`
  width: 100%;
  font-size: ${transformFont.toRem(14)};
  color: ${({ theme }) => theme.colors.red.r700};
`;

export const GroupInput = styled.div<{
  columns?: number;
  gridColumns?: string;
  paddingSide?: number;
  minHeight?: number;
  side?: 'top' | 'center' | 'bottom';
}>`
  width: 100%;
  min-height: ${({ minHeight }) => minHeight ?? 73.4}px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ side }) =>
    side &&
    css`
      ${{
        top: css`
          align-items: flex-start;
        `,
        center: css`
          align-items: center;
        `,
        bottom: css`
          align-items: flex-end;
        `
      }[side]}
    `}

  ${({ columns }) =>
    columns &&
    css`
      display: grid;
      grid-template-columns: repeat(${columns}, 1fr);
      gap: 15px;
    `}
  ${({ gridColumns }) =>
    gridColumns &&
    css`
      display: grid;
      grid-template-columns: ${gridColumns};
      grid-gap: 15px;
    `}
  ${({ paddingSide }) =>
    paddingSide &&
    css`
      padding: 0 ${paddingSide}px;
    `}
`;
