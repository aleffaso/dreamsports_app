import styled from 'styled-components';
import { Device } from '../../../../../../../helpers/screens';
import { DisplayFlexCenter } from '../../../../../../../styles';
import { transformFont } from '../../../../../../../utils';

export const Wrapper = styled.div`
  width: 100%;
  & > div {
    ${DisplayFlexCenter}
    gap: 10px;
  }
  @media ${Device.max('mobile', 'lg')} {
    & > div {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export const CardBody = styled.div`
  width: 300px;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.shades.white};
  border-radius: 10px;
  & > img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  & > div {
    padding-top: 20px;
    &:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      font-size: ${transformFont.toRem(20)};
      color: ${({ theme }) => theme.colors.neutral.n900};
      & > svg {
        color: ${({ theme }) => theme.colors.greenMud.gm100};
      }
    }
    &:nth-child(3) {
      font-size: ${transformFont.toRem(22)};
      color: ${({ theme }) => theme.colors.neutral.n900};
      text-align: center;
    }
    &:nth-child(4) {
      font-size: ${transformFont.toRem(18)};
      color: ${({ theme }) => theme.colors.neutral.n900};
      text-align: center;
    }
  }
  @media ${Device.max('tablet', 'md')} {
    width: 220px;
    height: 400px;
    & > img {
      width: 220px;
      height: 170px;
    }
    & > div {
      &:nth-child(2) {
        font-size: ${transformFont.toRem(18)};
      }
      &:nth-child(3) {
        font-size: ${transformFont.toRem(20)};
      }
      &:nth-child(4) {
        font-size: ${transformFont.toRem(14)};
      }
    }
  }
  @media ${Device.max('mobile', 'lg')} {
    width: 250px;
    height: 160px;
    & > img {
      width: 250px;
      height: 160px;
      border-radius: 10px;
    }
    & > div {
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(3) {
        display: none;
      }
      &:nth-child(4) {
        display: none;
      }
    }
  }
`;
