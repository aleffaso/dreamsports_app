import styled from 'styled-components';
import { Device } from '../../../../../../../../../helpers/screens';
import { DisplayFlexCenter } from '../../../../../../../../../styles';
import { transformFont } from '../../../../../../../../../utils';

export const Wrapper = styled.div`
  & > div > form {
    ${DisplayFlexCenter}
    gap: 5px;
    & > input {
      width: 214px;
      height: 42px;
      border-width: 0px;
      padding: 0px 10px;
      border-radius: 8px;
      &::placeholder {
        color: ${({ theme }) => theme.colors.neutral.n900};
        opacity: 0.5;
        font-size: ${transformFont.toRem(18)};
      }
      @media ${Device.max('tablet', 'md')} {
        width: 200px;
        height: 40px;
        &::placeholder {
          font-size: ${transformFont.toRem(12)};
        }
      }
    }
  }
`;
