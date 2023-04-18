import styled from 'styled-components';
import { transformFont } from '../../../../utils';
import { DisplayFlexCenter } from '../../../../styles';

export const Wrapper = styled.div<{ hasIcon: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  & .container {
    width: 100%;
    height: 135px;
    border-radius: 5px;
    font-size: ${transformFont.toRem(16)};
    position: relative;
    & > i {
      width: 35px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      ${DisplayFlexCenter}
      & > svg {
        font-size: 28px;
        color: ${({ theme }) => theme.colors.neutral.n300};
      }
    }
    & > textarea {
      width: 100%;
      height: 100%;
      outline: none;
      border-radius: inherit;
      padding-left: ${({ hasIcon }) => (hasIcon ? 45 : 10)}px;
      border: 2px solid ${({ theme }) => theme.colors.neutral.n400};
      padding: 10px;
      resize: none;
      outline: none;
      &:focus {
        border: 2px solid ${({ theme }) => theme.colors.neutral.n800};
      }
      &:focus:required:invalid,
      &.error {
        border: 2px solid ${({ theme }) => theme.colors.red.r600};
      }
      &::placeholder {
        opacity: 0.7;
      }
    }
  }
`;
