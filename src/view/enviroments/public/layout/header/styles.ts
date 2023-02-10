import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100vw;
`;

export const ContactBar = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral.n800};
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.colors.neutral.n200};
      svg {
        font-size: 20px;
      }
      a {
        color: ${({ theme }) => theme.colors.neutral.n200};
        text-decoration: none;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
`;

export const Header = styled.section`
  width: 100%;
  height: 92px;
  background-color: ${({ theme }) => theme.colors.shades.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
