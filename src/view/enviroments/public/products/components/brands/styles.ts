import styled from 'styled-components';
import { Device } from '../../../../../../helpers/screens';
import { DisplayFlexCenter } from '../../../../../../styles';
import { transformFont } from '../../../../../../utils';

export const Wrapper = styled.section`
  width: 100vw;
  min-height: 350px;
  background-color: ${({ theme }) => theme.colors.neutral.n200};
  padding: 30px 0 0 0;
  & > h1 {
    ${DisplayFlexCenter}
    font-weight: 300;
    font-size: ${transformFont.toRem(32)};
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
  & > div {
    & > div {
      align-items: center;
      grid-template-columns: repeat(6, 1fr);
      gap: 0px;

      @media ${Device.max('tablet', 'md')} {
        grid-template-columns: repeat(3, 1fr);
      }

      @media ${Device.max('mobile', 'lg')} {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;

export const BrandBody = styled.div`
  width: min(400px, 100%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  padding: 20px 0;
  & > img {
    filter: grayscale(100%);
    cursor: pointer;
    &:hover {
      transition: 0.5s ease;
      opacity: 50%;
    }
  }
`;
