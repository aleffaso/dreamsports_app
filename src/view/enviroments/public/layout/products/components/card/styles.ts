import styled from 'styled-components';
import { Device } from '../../../../../../../helpers/screens';
import { DisplayFlexCenter } from '../../../../../../../styles';

export const Wrapper = styled.div`
  width: 100%;
  & > div {
    ${DisplayFlexCenter}
    gap: 10px;
  }
  @media ${Device.max('mobile', 'lg')} {
    & > div {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`;
