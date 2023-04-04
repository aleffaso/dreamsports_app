import styled from 'styled-components';
import { Device } from '../../../../../../helpers/screens';
import { DisplayFlexCenter, DisplayFlexCenterBetween } from '../../../../../../styles';
import { transformFont } from '../../../../../../utils';

export const Wrapper = styled.section`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.neutral.n100};
  padding: 30px 0 30px 0;
  & > div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    margin: 0 60px;
    @media ${Device.max('tablet', 'md')} {
      margin: 0 30px;
    }

    @media ${Device.max('mobile', 'lg')} {
      display: grid;
      gap: 30px;
    }
  }
`;

export const Categories = styled.div`
  width: 440px;
  min-height: 1749px;
  background-color: ${({ theme }) => theme.colors.neutral.n300};
  border-radius: 20px;

  & > h2 {
    text-align: center;
    margin: 20px 0;
  }

  & > div {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    border-color: ${({ theme }) => theme.colors.neutral.n800};
    & > button {
      height: 30px;
      font-size: ${transformFont.toRem(14)};
    }
  }

  & > hr {
    width: 90%;
    margin: 10px 5%;
    border: 1px solid ${({ theme }) => theme.colors.neutral.n400};
  }

  @media ${Device.max('tablet', 'md')} {
    width: 240px;
    min-height: 2842.5px;
    & > div {
      & > span {
        font-size: ${transformFont.toRem(14)};
      }
    }
  }

  @media ${Device.max('mobile', 'lg')} {
    width: 350px;
    min-height: 200px;
    & > div {
      & > span {
        font-size: ${transformFont.toRem(18)};
      }
    }
  }
`;

export const Products = styled.div`
  width: 1240px;
  min-height: 1749px;
  background-color: ${({ theme }) => theme.colors.neutral.n300};
  border-radius: 20px;

  @media ${Device.max('tablet', 'md')} {
    width: 740px;
    min-height: 2842.5px;
  }

  @media ${Device.max('mobile', 'lg')} {
    width: 350px;
  }
`;

export const SearchBar = styled.div`
  width: 100%;
  ${DisplayFlexCenterBetween}
  padding: 15px 30px;
  & > div {
    &:first-child {
      ${DisplayFlexCenter}
      gap: 10px;
      & > a {
        font-size: ${transformFont.toRem(20)};
        font-weight: 500;
        color: ${({ theme }) => theme.colors.shades.black};
        &:hover {
          color: ${({ theme }) => theme.colors.neutral.n500};
        }
        @media ${Device.max('tablet', 'md')} {
          font-size: ${transformFont.toRem(16)};
        }
      }
    }
    &:last-child {
      ${DisplayFlexCenter}
      gap: 10px;
      & > input {
        width: 300px;
        height: 42px;
        border-width: 0px;
        padding: 0px 10px;
        border-radius: 8px;
        font-size: ${transformFont.toRem(18)};
        font-weight: 400;
        &::placeholder {
          color: ${({ theme }) => theme.colors.neutral.n900};
          opacity: 0.5;
          font-size: ${transformFont.toRem(18)};
        }
      }
      & > button {
        & > svg {
          font-size: 24px;
        }
      }
    }
  }
  @media ${Device.max('tablet', 'md')} {
    display: block;
    & > div {
      &:last-child {
        padding: 15px 0 0px 0;
      }
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
    padding: 0 0 15px 0;
    font-size: ${transformFont.toRem(22)};
    color: ${({ theme }) => theme.colors.neutral.n900};
    text-align: center;
  }
  @media ${Device.max('tablet', 'md')} {
    & > div {
      & > .ratingPrice {
        font-size: ${transformFont.toRem(18)};
      }
      &:nth-child(2) {
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
      &:nth-child(2) {
        font-size: ${transformFont.toRem(20)};
      }
    }
    & > span {
      font-size: ${transformFont.toRem(22)};
    }
  }
`;

export const Pagination = styled.div`
  width: 100%;
  ${DisplayFlexCenter}
  gap: 4px;
  padding: 0px 0 15px 0px;
  @media ${Device.max('mobile', 'lg')} {
    & > button {
      width: 10px;
    }
  }
`;