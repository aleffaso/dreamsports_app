import styled from 'styled-components';
import { Device } from '../../../../../../../helpers/screens';
import { transformFont } from '../../../../../../../utils';

export const Wrapper = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
  & > a {
    font-size: ${transformFont.toRem(18)};
    color: ${({ theme }) => theme.colors.neutral.n900};
  }
  & > a:hover {
    color: ${({ theme }) => theme.colors.neutral.n500};
  }
  @media ${Device.max('mobile', 'lg')} {
    font-size: ${transformFont.toRem(8)};
    gap: 4px;
  }
`;
