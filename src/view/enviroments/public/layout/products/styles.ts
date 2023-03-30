import styled from 'styled-components';
import { Device } from '../../../../../helpers/screens';
import { DisplayFlexCenter } from '../../../../../styles';
import { transformFont } from '../../../../../utils';

export const Wrapper = styled.section`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.neutral.n400};
  padding: 30px 0 0 0;
  & > h1 {
    ${DisplayFlexCenter}
    font-weight: 300;
    font-size: ${transformFont.toRem(32)};
    color: ${({ theme }) => theme.colors.neutral.n800};
  }
  & > p {
    text-align: center;
    padding: 30px 0 0 0;
    font-weight: 300;
    font-size: ${transformFont.toRem(24)};
    color: ${({ theme }) => theme.colors.neutral.n800};
  }
  & > div > div {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    padding: 30px 60px;
    gap: 30px;

    @media ${Device.max('tablet', 'md')} {
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${Device.max('mobile', 'lg')} {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const CardBody = styled.div`
  width: 400px;
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
    width: 350px;
    height: 500px;
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
    width: 400px;
    height: 500px;
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
`;
