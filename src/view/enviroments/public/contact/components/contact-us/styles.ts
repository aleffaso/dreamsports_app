import styled from 'styled-components';
import { transformFont } from '../../../../../../utils';

export const Wrapper = styled.section`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.neutral.n200};
  padding: 30px 0 0 0;
  text-align: center;
  & > h1 {
    font-weight: 600;
    font-size: ${transformFont.toRem(40)};
    color: ${({ theme }) => theme.colors.neutral.n800};
  }
`;
