import styled from 'styled-components';
import { Device } from '../../../../../../../../../helpers/screens';
import { DisplayFlexCenterFlexStart } from '../../../../../../../../../styles';
import { transformFont } from '../../../../../../../../../utils';

export const Wrapper = styled.article`
  & > h1 {
    font-size: ${transformFont.toRem(30)};
    color: ${({ theme }) => theme.colors.shades.white};
    padding: 16px 0px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.n600};
    @media ${Device.max('tablet', 'md')} {
      font-size: ${transformFont.toRem(24)};
    }
  }
  & > div > span,
  a {
    ${DisplayFlexCenterFlexStart}
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
  & > div {
    @media ${Device.max('tablet', 'md')} {
      padding-bottom: 8px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.n600};
    }
  }
`;
