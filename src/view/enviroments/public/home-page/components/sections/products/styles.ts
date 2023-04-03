import styled from 'styled-components';
import { Device } from '../../../../../../../helpers/screens';
import { DisplayFlexCenter } from '../../../../../../../styles';
import { transformFont } from '../../../../../../../utils';

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral.n400};
  padding: 30px 0 0 0;
  & > h1 {
    ${DisplayFlexCenter}
    font-weight: 300;
    font-size: ${transformFont.toRem(32)};
    color: ${({ theme }) => theme.colors.neutral.n800};
  }
  & > p {
    margin: 0 25%;
    text-align: center;
    padding: 30px 0 0 0;
    font-weight: 300;
    font-size: ${transformFont.toRem(24)};
    color: ${({ theme }) => theme.colors.neutral.n800};

    @media ${Device.max('tablet', 'md')} {
      margin: 0 15%;
    }

    @media ${Device.max('mobile', 'lg')} {
      margin: 0 0;
    }
  }
`;

export const CardBody = styled.div`
  width: min(400px, 100%);
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
    height: 45px;
    overflow: hidden;
  }
  @media ${Device.max('tablet', 'md')} {
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
