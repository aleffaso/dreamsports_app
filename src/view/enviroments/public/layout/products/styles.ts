import styled from 'styled-components';
import { Device } from '../../../../../helpers/screens';
import { DisplayFlexCenter } from '../../../../../styles';

export const Wrapper = styled.section`
  width: 100vw;
  max-width: 1440px;
  height: 600px;
  background-color: ${({ theme }) => theme.colors.neutral.n400};
  ${DisplayFlexCenter}
`;
