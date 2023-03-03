import styled from 'styled-components';
import { transformFont } from '../../../../../../../../../utils';

export const Wrapper = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  & > h1 {
    font-size: ${transformFont.toRem(40)};
  }
  & > div > span,
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    & > svg {
      font-size: 30px;
      color: ${({ theme }) => theme.colors.neutral.n900};
    }
  }
`;
