import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100vw;
  height: 82px;
  background-color: ${({ theme }) => theme.colors.neutral.n900};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  & > h4 {
    color: ${({ theme }) => theme.colors.shades.white};
  }
`;
