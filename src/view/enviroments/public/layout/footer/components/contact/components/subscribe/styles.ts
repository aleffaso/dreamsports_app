import styled from 'styled-components';
import { Device } from '../../../../../../../../../helpers/screens';
import { DisplayFlexCenter } from '../../../../../../../../../styles';
import { transformFont } from '../../../../../../../../../utils';

export const Wrapper = styled.div`
  & > form {
    ${DisplayFlexCenter}
    gap: 10px;
    & > div > div > input {
      min-width: 200px;
      font-size: ${transformFont.toRem(16)};
      &::placeholder {
        font-size: ${transformFont.toRem(16)};
      }
    }
    & > button {
      min-width: 170px;
    }
    @media ${Device.max('tablet', 'md')} {
      display: flex;
      flex-direction: column;
    }
  }
`;
