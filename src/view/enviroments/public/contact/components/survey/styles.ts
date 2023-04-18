import styled from 'styled-components';
import { Device } from '../../../../../../helpers/screens';
import { DisplayFlexCenter } from '../../../../../../styles';
import { transformFont } from '../../../../../../utils';
import { transparentize } from 'polished';

export const Wrapper = styled.section`
  width: 100%;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.colors.neutral.n200};
  ${DisplayFlexCenter};
  & > form {
    width: 100%;
    max-width: 600px;
    font-weight: 600;
    font-size: ${transformFont.toRem(16)};
    background-color: ${({ theme }) => theme.colors.shades.white};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 15px 30px 30px 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 1px ${({ theme }) => transparentize(0.25, theme.colors.shades.black)};

    @media ${Device.max('mobile', 'lg')} {
      max-width: 380px;
    }
  }
`;
