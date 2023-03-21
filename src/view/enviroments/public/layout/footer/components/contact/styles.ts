import styled from 'styled-components';
import { Device } from '../../../../../../../helpers/screens';
import { DisplayFlexCenterBetween } from '../../../../../../../styles';

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1440px;
  ${DisplayFlexCenterBetween}
  padding-top: 16px;
  padding: 20px 0;
  @media ${Device.max('tablet', 'md')} {
    flex-direction: column;
    gap: 10px;
  }
`;
