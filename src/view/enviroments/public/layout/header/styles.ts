import styled from 'styled-components';
import { Device } from '../../../../../helpers/screens';
import { DisplayFlexCenter, DisplayFlexCenterBetween } from '../../../../../styles';
import { transformFont } from '../../../../../utils';

export const Wrapper = styled.header`
  width: 100vw;
`;

export const ContactBar = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral.n800};
  width: 100%;
  height: 40px;
  ${DisplayFlexCenterBetween}
  & > div {
    ${DisplayFlexCenter}
    gap: 10px;
    margin: 70px;
    & > a {
      ${DisplayFlexCenter}
      gap: 5px;
      color: ${({ theme }) => theme.colors.shades.white};
      & > svg {
        font-size: 20px;
      }
      @media ${Device.max('mobile', 'lg')} {
        font-size: ${transformFont.toRem(10)};
      }
    }
    @media ${Device.max('tablet', 'md')} {
      margin: 40px;
    }
    @media ${Device.max('mobile', 'lg')} {
      margin: 5px;
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
