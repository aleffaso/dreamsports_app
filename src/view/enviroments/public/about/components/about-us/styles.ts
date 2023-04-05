import styled from 'styled-components';
import { Device } from '../../../../../../helpers/screens';
import { DisplayFlexCenter } from '../../../../../../styles';
import { transformFont } from '../../../../../../utils';

export const Wrapper = styled.section`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.neutral.n200};
  ${DisplayFlexCenter}
  gap: 40px;
  & > div {
    width: 50%;
    text-align: justify;
    & > h1 {
      font-weight: 600;
      font-size: ${transformFont.toRem(40)};
      color: ${({ theme }) => theme.colors.neutral.n800};

      @media ${Device.max('tablet', 'md')} {
        text-align: center;
      }
    }
    & > p {
      padding: 30px 0 0 0;
      font-weight: 300;
      font-size: ${transformFont.toRem(24)};
      color: ${({ theme }) => theme.colors.neutral.n800};
    }

    @media ${Device.max('tablet', 'md')} {
      width: 40%;
    }

    @media ${Device.max('mobile', 'lg')} {
      width: 90%;
      padding: 0 0 50px 0;
    }
  }
  & > img {
    filter: grayscale(100%);

    @media ${Device.max('tablet', 'md')} {
      width: 300px;
    }
    @media ${Device.max('mobile', 'lg')} {
      width: 250px;
      height: 300px;
    }
  }

  @media ${Device.max('mobile', 'lg')} {
    padding: 0px 0;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`;
