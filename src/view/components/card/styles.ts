import styled from 'styled-components';
import { Device } from '../../../helpers/screens';
import { DisplayFlexCenter } from '../../../styles';

export const Wrapper = styled.div<{ paddingSide?: number }>`
  width: 100%;
  overflow-x: hidden;
  ${DisplayFlexCenter}
  & > div {
    width: 100%;
    max-width: 1440px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    padding: 30px ${({ paddingSide }) => paddingSide ?? 30}px;
    gap: 30px;

    @media ${Device.max('tablet', 'md')} {
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${Device.max('mobile', 'lg')} {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
