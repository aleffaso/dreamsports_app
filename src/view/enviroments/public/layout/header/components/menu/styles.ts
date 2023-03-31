import styled, { css } from 'styled-components';
import { Device } from '../../../../../../../helpers/screens';
import { DisplayFlexCenter } from '../../../../../../../styles';
import { transformFont } from '../../../../../../../utils';

export const Wrapper = styled.nav<{ isOpen: boolean }>`
  height: 100%;
  ${DisplayFlexCenter}
  & > div {
    ${DisplayFlexCenter}
    gap: 64px;
    & > a {
      font-size: ${transformFont.toRem(20)};
      font-weight: 500;
      color: ${({ theme }) => theme.colors.neutral.n900};
      &:hover {
        color: ${({ theme }) => theme.colors.neutral.n500};
      }
    }
    @media ${Device.max('tablet', 'md')} {
      display: none;
      ${({ isOpen }) =>
        isOpen &&
        css`
          width: 100vw;
          height: calc(100vh - 132px);
          background: ${({ theme }) => theme.colors.shades.white};
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 132px;
          left: 0;
          z-index: 1;
        `}
    }
  }
  @media ${Device.max('mobile', 'lg')} {
    font-size: ${transformFont.toRem(8)};
    gap: 4px;
  }
  @media ${Device.max('tablet', 'md')} {
    order: 1;
  }
`;

export const HamburgerMenu = styled.button`
  ${DisplayFlexCenter}
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  & > svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.neutral.n900};
  }
  @media ${Device.min('tablet', 'md')} {
    display: none;
  }
`;
