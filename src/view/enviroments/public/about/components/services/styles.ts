import styled from 'styled-components';
import { Device } from '../../../../../../helpers/screens';
import { DisplayFlexCenter } from '../../../../../../styles';
import { transformFont } from '../../../../../../utils';

export const Wrapper = styled.section`
  width: 100vw;
  min-height: 450px;
  background-color: ${({ theme }) => theme.colors.neutral.n400};
  padding: 30px 0 0 0;
  & > div {
    display: grid;
    justify-content: center;
    justify-items: center;
  }
  & > h1 {
    ${DisplayFlexCenter}
    font-weight: 600;
    font-size: ${transformFont.toRem(40)};
    color: ${({ theme }) => theme.colors.neutral.n800};
  }
  & > p {
    margin: 0 25%;
    text-align: center;
    padding: 30px 0 0 0;
    font-weight: 300;
    font-size: ${transformFont.toRem(24)};
    color: ${({ theme }) => theme.colors.neutral.n800};

    @media ${Device.max('tablet', 'md')} {
      margin: 0 15%;
    }

    @media ${Device.max('mobile', 'lg')} {
      margin: 0 0;
    }
  }
`;

export const ServiceBody = styled.section`
  width: min(250px, 100%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  padding: 20px 20px;
  background-color: ${({ theme }) => theme.colors.shades.white};
  border-radius: 20px;

  & > svg {
    font-size: 100px;
  }

  & > span {
    ${DisplayFlexCenter}
    font-size: ${transformFont.toRem(20)};
  }
`;
