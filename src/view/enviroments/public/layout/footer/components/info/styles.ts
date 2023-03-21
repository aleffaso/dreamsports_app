import styled from 'styled-components';
import { Device } from '../../../../../../../helpers/screens';
import { DisplayFlexCenterBetween } from '../../../../../../../styles';

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1440px;
  ${DisplayFlexCenterBetween}
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.n600};
  @media ${Device.max('tablet', 'md')} {
    display: block;
    border-bottom: none;
    padding-bottom: 0px;
  }
`;
