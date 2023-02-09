import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: calc(100vh - 70px);
  padding-top: 70px;
  background: ${({ theme }) => theme.colors.shades.black};
  p {
    color: ${({ theme }) => theme.colors.shades.white};
  }
`;
