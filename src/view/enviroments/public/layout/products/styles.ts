import styled from 'styled-components';
import { Device } from '../../../../../helpers/screens';
import { DisplayFlexCenter } from '../../../../../styles';
import { transformFont } from '../../../../../utils';

export const Wrapper = styled.section`
  width: 100vw;
  height: 600px;
  background-color: ${({ theme }) => theme.colors.neutral.n400};
  ${DisplayFlexCenter}
`;

export const CardBody = styled.div`
  width: 300px;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.shades.white};
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  overflow: hidden;
  & > .ratingPrice {
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 16px;
    font-size: ${transformFont.toRem(20)};
    color: ${({ theme }) => theme.colors.neutral.n900};
    & > div {
      display: flex;
      gap: 4px;
    }
  }
  & > span {
    font-size: ${transformFont.toRem(22)};
    color: ${({ theme }) => theme.colors.neutral.n900};
    text-align: center;
  }
  & > p {
    width: 100%;
    font-size: ${transformFont.toRem(18)};
    color: ${({ theme }) => theme.colors.neutral.n900};
    text-align: center;
    padding: 0 18px;
    height: 130px;
    overflow: hidden;
  }
  @media ${Device.max('tablet', 'md')} {
    width: 220px;
    height: 400px;
    & > img {
      width: 220px;
      height: 170px;
    }
    & > div {
      & > .ratingPrice {
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
