import styled from 'styled-components';
import { Device } from '../../../helpers/screens';

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  & > div {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    padding: 30px 60px;
    gap: 30px;

    @media ${Device.max('tablet', 'md')} {
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${Device.max('mobile', 'lg')} {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
