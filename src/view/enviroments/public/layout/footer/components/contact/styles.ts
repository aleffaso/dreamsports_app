import styled from 'styled-components';
import { Device } from '../../../../../../../helpers/screens';

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  padding: 20px 0;
  @media ${Device.max('tablet', 'md')} {
    flex-direction: column;
    gap: 10px;
  }
`;
