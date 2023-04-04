import styled from 'styled-components';
import { DisplayFlexCenter } from '../../../../../../../styles';

export const Wrapper = styled.nav`
  height: 100%;
  ${DisplayFlexCenter}
  & > button > svg {
    font-size: 26px;
  }
`;
