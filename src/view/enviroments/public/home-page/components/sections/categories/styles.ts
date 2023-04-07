import styled from 'styled-components';
import { Device } from '../../../../../../../helpers/screens';
import { DisplayFlexCenter } from '../../../../../../../styles';
import { transformFont } from '../../../../../../../utils';
export const Wrapper = styled.section`
  width: 100vw;
  min-height: 700px;
  background-color: ${({ theme }) => theme.colors.neutral.n200};
  padding: 30px 0 0 0;
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

export const CategoryBody = styled.div`
  width: min(400px, 100%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  padding: 20px 0;
  & > span {
    padding: 20px 0;
    font-size: ${transformFont.toRem(20)};
  }
  & > img {
    border: 1px solid ${({ theme }) => theme.colors.neutral.n300};
    border-radius: 50%;
    cursor: pointer;
    transition: 0.5s ease;
    &:hover {
      opacity: 50%;
    }
  }
`;
