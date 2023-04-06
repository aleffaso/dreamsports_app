import styled from 'styled-components';
import { Device } from '../../../../../../helpers/screens';
import { DisplayFlexCenter } from '../../../../../../styles';
import { transformFont } from '../../../../../../utils';

export const Wrapper = styled.section`
  width: 100vw;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.colors.neutral.n200};
  & > form {
    width: 100%;
    ${DisplayFlexCenter}
    font-weight: 600;
    font-size: ${transformFont.toRem(16)};
    & > div {
      width: 600px;
      background-color: ${({ theme }) => theme.colors.shades.white};
      display: grid;
      justify-items: stretch;
      padding: 15px 30px 30px 30px;
      border-radius: 10px;
      box-shadow: 0px 0px 1px ${({ theme }) => theme.colors.shades.black}3F;
      & > label {
        color: ${({ theme }) => theme.colors.neutral.n700};
        padding: 10px 0;
      }
      & > input {
        height: 35px;
        border: 2px solid ${({ theme }) => theme.colors.neutral.n400};
        border-radius: 5px;
        font-size: ${transformFont.toRem(16)};
        padding-left: 10px;
        outline: none;
        &:focus {
          border: 2px solid ${({ theme }) => theme.colors.neutral.n800};
        }
        &:focus:required:invalid {
          border: 2px solid ${({ theme }) => theme.colors.red.r600};
        }
        &::placeholder {
          opacity: 0.7;
        }
      }
      & > textarea {
        height: 150px;
        border: 2px solid ${({ theme }) => theme.colors.neutral.n400};
        border-radius: 5px;
        font-size: ${transformFont.toRem(16)};
        padding: 10px;
        resize: none;
        outline: none;
        &:focus {
          border: 2px solid ${({ theme }) => theme.colors.neutral.n800};
        }
        &:focus:required:invalid {
          border: 2px solid ${({ theme }) => theme.colors.red.r600};
        }
        &::placeholder {
          opacity: 0.7;
        }
      }
      & > button {
        margin: 20px 0;
      }

      @media ${Device.max('mobile', 'lg')} {
        width: 380px;
      }
    }
  }
`;
