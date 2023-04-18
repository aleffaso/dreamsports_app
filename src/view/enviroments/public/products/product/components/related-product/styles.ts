import styled from 'styled-components';
import { DisplayFlexCenter } from '../../../../../../../styles';
import { transformFont } from '../../../../../../../utils';
import { Device } from '../../../../../../../helpers/screens';

export const Wrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral.n300};
  padding: 30px;
  & > h1 {
    ${DisplayFlexCenter}
    font-weight: 600;
    font-size: ${transformFont.toRem(30)};
    color: ${({ theme }) => theme.colors.neutral.n800};
  }
`;

export const CardBody = styled.div`
  width: min(400px, 100%);
  height: 500px;
  background-color: ${({ theme }) => theme.colors.neutral.n100};
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  overflow: hidden;
  img {
    transition: 0.5s ease;
    &:hover {
      opacity: 0.5;
    }
  }
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
  & > a.product-title {
    padding: 0 0 15px 0;
    font-size: ${transformFont.toRem(20)};
    color: ${({ theme }) => theme.colors.neutral.n900};
    text-align: center;
    &:hover {
      text-decoration: underline;
    }
  }

  & > button {
    margin-top: 10px;
  }

  @media ${Device.max('tablet', 'md')} {
    & > div {
      & > .ratingPrice {
        font-size: ${transformFont.toRem(18)};
      }
      & > a.product-title {
        font-size: ${transformFont.toRem(16)};
      }
    }
    & > span {
      font-size: ${transformFont.toRem(18)};
    }
  }
  @media ${Device.max('mobile', 'lg')} {
    & > div {
      & > .ratingPrice {
        font-size: ${transformFont.toRem(18)};
      }
      & > a.product-title {
        font-size: ${transformFont.toRem(20)};
      }
    }
    & > span {
      font-size: ${transformFont.toRem(22)};
    }
  }
`;
