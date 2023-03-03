import styled from 'styled-components';
import { DisplayFlexCenter } from '../../../../../styles';

export const Wrapper = styled.footer`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.neutral.n800};
  ${DisplayFlexCenter}
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 90%;
  height: 600px;
`;
