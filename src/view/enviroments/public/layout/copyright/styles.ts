import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100vw;
  height: 82px;
  background-color: ${({ theme }) => theme.colors.neutral.n900};
  display: grid;
  justify-items: center;
  align-items: center;
  align-content: space-evenly;
  & > h4 {
    color: ${({ theme }) => theme.colors.shades.white};
  }
`;
