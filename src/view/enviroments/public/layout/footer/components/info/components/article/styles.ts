import styled from 'styled-components';
import { Device } from '../../../../../../../../../helpers/screens';
import { transformFont } from '../../../../../../../../../utils';

export const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  & > h1 {
    display: flex;
    font-size: ${transformFont.toRem(40)};
    color: ${({ theme }) => theme.colors.shades.white};
    padding: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.n600};
    @media ${Device.max('tablet', 'md')} {
      font-size: ${transformFont.toRem(32)};
    }
  }
  & > div > span,
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    color: ${({ theme }) => theme.colors.neutral.n300};
    padding-top: 8px;
    & > svg {
      font-size: 30px;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.neutral.n500};
    }
  }
`;
