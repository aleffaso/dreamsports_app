import styled from 'styled-components';
import { Device } from '../../../../../../../../../helpers/screens';
import { transformFont } from '../../../../../../../../../utils';

export const Wrapper = styled.div`
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    @media ${Device.max('tablet', 'md')} {
      gap: 5px;
    }
  }
  & > div > a > svg {
    font-size: ${transformFont.toRem(30)};
    color: ${({ theme }) => theme.colors.shades.white};
    @media ${Device.max('tablet', 'md')} {
      font-size: ${transformFont.toRem(24)};
    }
  }
`;
