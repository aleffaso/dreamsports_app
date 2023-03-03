import styled from 'styled-components';
import { transformFont } from '../../../../../../../utils';

export const Wrapper = styled.section`
  width: 90%;
  max-width: 1440px;
`;

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: left;
  & > h1 {
    font-size: ${transformFont.toRem(40)};
    color: ${({ theme }) => theme.colors.neutral.n400};
  }
`;
