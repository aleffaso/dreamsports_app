import styled from 'styled-components';
import { DisplayFlexCenter } from '../../../../../../../../../styles';

export const Wrapper = styled.button`
  width: 80px;
  height: 80px;
  ${DisplayFlexCenter}
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  & > svg {
    font-size: 70px;
    color: ${({ theme }) => theme.colors.shades.white};
  }
  &:hover {
    opacity: 0.5;
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
