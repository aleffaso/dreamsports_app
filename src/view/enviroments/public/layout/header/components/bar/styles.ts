import styled from 'styled-components';
import { transformFont } from '../../../../../../../utils';

export const Wrapper = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  & > a {
    font-size: ${transformFont.toRem(30)};
    color: ${({ theme }) => theme.colors.neutral.n900};
  }
  & > a:hover {
    color: ${({ theme }) => theme.colors.neutral.n500};
  }
`;
