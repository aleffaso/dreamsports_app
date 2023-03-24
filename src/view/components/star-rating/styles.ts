import styled from 'styled-components';

export const Wrapper = styled.i<{ isActive: boolean }>`
  & > svg {
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.warning.w300 : theme.colors.neutral.n400};
  }
`;
