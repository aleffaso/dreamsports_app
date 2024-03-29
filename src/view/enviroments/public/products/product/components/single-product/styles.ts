import styled from 'styled-components';
import { DisplayFlexCenter } from '../../../../../../../styles';
import { Device } from '../../../../../../../helpers/screens';
import { transformFont } from '../../../../../../../utils';

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  ${DisplayFlexCenter};
  gap: 10px;
  padding: 30px;

  @media ${Device.max('tablet', 'md')} {
    display: flex;
    flex-direction: column;
  }

  @media ${Device.max('mobile', 'lg')} {
    display: flex;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral.n300};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  & > .main-image {
    width: 100%;
    min-height: 380px;
    overflow: hidden;
    border-radius: 10px 10px 0 0;
    position: relative;
  }

  & > .thumb-image {
    width: 100%;
    height: 200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    & > button {
      width: 100%;
      height: 100%;
      border: 0;
      outline: 0;
      cursor: pointer;
      transition: 0.3s;
      overflow: hidden;
      position: relative;
      &:hover {
        opacity: 0.5;
      }
      &.selected {
        opacity: 0.5;
      }
    }
  }

  @media ${Device.max('tablet', 'md')} {
    min-height: 340px;
  }

  @media ${Device.max('mobile', 'lg')} {
    min-height: 340px;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  min-height: 580px;
  background-color: ${({ theme }) => theme.colors.neutral.n100};
  border-radius: 10px;
  padding: 30px;

  & > .title {
    text-align: center;
    padding-bottom: 10px;
  }

  & > .price {
    text-align: center;
    font-size: ${transformFont.toRem(20)};
    padding-bottom: 15px;
  }

  & > .rating {
    text-align: center;
    font-size: ${transformFont.toRem(18)};
    color: ${({ theme }) => theme.colors.neutral.n900};
    ${DisplayFlexCenter};
    gap: 5px;
    padding-bottom: 15px;
    & > div {
      display: flex;
      gap: 4px;
    }
  }

  & > .info {
    display: grid;
    border-color: ${({ theme }) => theme.colors.neutral.n800};
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.n400};
    padding-bottom: 15px;
    & > h3 {
      border-color: ${({ theme }) => theme.colors.neutral.n800};
      border-top: 1px solid ${({ theme }) => theme.colors.neutral.n400};
      text-align: center;
      font-size: ${transformFont.toRem(18)};
      padding-top: 15px;
      padding-bottom: 15px;
    }
    & > .brand {
      display: flex;
      gap: 5px;
      text-align: justify;
      font-size: ${transformFont.toRem(16)};
      padding-bottom: 15px;
    }

    & > .description {
      display: flex;
      gap: 5px;
      text-align: justify;
      font-size: ${transformFont.toRem(16)};
      padding-bottom: 15px;
    }

    & > .inventory {
      display: flex;
      gap: 5px;
      text-align: justify;
      font-size: ${transformFont.toRem(16)};
      padding-bottom: 15px;
    }

    & > .specifications {
      display: flex;
      align-items: center;
      gap: 5px;
      text-align: justify;
      font-size: ${transformFont.toRem(16)};
      padding-bottom: 15px;
      & > button {
        font-size: ${transformFont.toRem(14)};
        & > svg {
          font-size: 16px;
        }
      }
    }

    & > .colors {
      display: flex;
      align-items: center;
      gap: 5px;
      text-align: justify;
      font-size: ${transformFont.toRem(16)};
      padding-bottom: 15px;
      & > div {
        display: flex;
        & > button {
          font-size: ${transformFont.toRem(14)};
          & > svg {
            font-size: 16px;
          }
        }
      }
    }

    & > .sizes {
      display: flex;
      align-items: center;
      gap: 5px;
      text-align: justify;
      font-size: ${transformFont.toRem(16)};
      padding-bottom: 15px;
      & > div {
        display: flex;
        gap: 5px;
        & > button {
          font-size: ${transformFont.toRem(14)};
          & > svg {
            font-size: 16px;
          }
        }
      }
    }

    @media ${Device.max('mobile', 'lg')} {
      display: flex;
      flex-direction: column;
      & > .colors {
        display: flex;
        flex-direction: column;
        & > div {
          display: grid;
          gap: 10px;
          grid-template-columns: repeat(2, 1fr);
          padding-top: 10px;
        }
      }
      & > .sizes {
        display: flex;
        flex-direction: column;
        & > div {
          display: grid;
          gap: 10px;
          grid-template-columns: repeat(2, 1fr);
          padding-top: 10px;
        }
      }
    }
  }

  & > .info-footer {
    width: 100%;
    ${DisplayFlexCenter}
    gap: 10px;
    padding-top: 20px;

    & > .quantity {
      ${DisplayFlexCenter}
      & > button {
        &:first-child {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        &:last-child {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
      & > span {
        width: 40px;
        text-align: center;
        font-size: ${transformFont.toRem(18)};
        background: ${({ theme }) => theme.colors.shades.white};
        padding: 10.5px 0;
      }
    }
    @media ${Device.max('mobile', 'lg')} {
      display: flex;
      flex-direction: column;
      & > .info-footer {
        & > .quantity {
          display: flex;
          gap: 10px;
        }
        & > button {
          font-size: ${transformFont.toRem(16)};
        }
      }
    }
  }
`;
