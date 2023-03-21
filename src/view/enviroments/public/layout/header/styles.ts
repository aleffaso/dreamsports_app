import styled from 'styled-components';
import { Device } from '../../../../../helpers/screens';
import { DisplayFlexCenter, DisplayFlexCenterBetween } from '../../../../../styles';

export const Wrapper = styled.header`
  width: 100vw;
`;

export const ContactBar = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral.n800};
  width: 100%;
  height: 40px;
  ${DisplayFlexCenter}
  & > div {
    ${DisplayFlexCenterBetween}
    padding: 0 16px;
    & > div {
      ${DisplayFlexCenter}
      gap: 8px;
      color: ${({ theme }) => theme.colors.neutral.n200};
      svg {
        font-size: 20px;
      }
      a {
        color: ${({ theme }) => theme.colors.neutral.n200};
        text-decoration: none;
      }
      @media ${Device.max('mobile', 'lg')} {
        &:nth-child(1) {
          opacity: 0;
        }
        &:nth-child(2) {
          svg {
            font-size: 16px;
          }
        }
      }
    }
  }
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1440px;
`;

export const Header = styled.section`
  width: 100%;
  height: 92px;
  background-color: ${({ theme }) => theme.colors.shades.white};
  ${DisplayFlexCenter}
  & > div {
    ${DisplayFlexCenterBetween}
  }
`;

export const Logo = styled.div`
  position: relative;
  width: 67px;
  height: 100%;
  ${DisplayFlexCenter}
  padding: 18px 0;
  & > a {
    position: relative;
    width: 100%;
    height: 100%;
    ${DisplayFlexCenter}
  }
  @media ${Device.max('mobile', 'lg')} {
    width: 50px;
    height: calc(50px * 0.83);
    & > a {
      height: calc(50px * 0.83);
    }
  }
`;
