import styled from 'styled-components';
import { Device } from '../../../../../../helpers/screens';
import { DisplayFlexCenter } from '../../../../../../styles';
import { transformFont } from '../../../../../../utils';

export const Wrapper = styled.section`
  width: 100%;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.colors.neutral.n200};
  ${DisplayFlexCenter};
  & > form {
    width: 100%;
    max-width: 600px;
    font-weight: 600;
    font-size: ${transformFont.toRem(16)};
    background-color: ${({ theme }) => theme.colors.shades.white};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 15px 30px 30px 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 1px ${({ theme }) => theme.colors.shades.black}3F;

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
  }
`;
