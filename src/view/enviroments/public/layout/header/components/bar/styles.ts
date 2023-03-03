import styled from 'styled-components';
import { Device } from '../../../../../../../helpers/screens';
import { DisplayFlexCenter } from '../../../../../../../styles';

export const Wrapper = styled.nav`
  height: 100%;
  ${DisplayFlexCenter}
  gap: 8px;
  & > a > svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.neutral.n900};
    &:hover {
      color: ${({ theme }) => theme.colors.neutral.n500};
    }
  }
  @media ${Device.max('tablet', 'md')} {
    gap: 32px;
  }
`;
