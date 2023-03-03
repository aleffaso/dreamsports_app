import styled from 'styled-components';
import { Device } from '../../../../../../../helpers/screens';

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-around;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.n600};
  @media ${Device.max('tablet', 'md')} {
    display: block;
  }
`;

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
`;
