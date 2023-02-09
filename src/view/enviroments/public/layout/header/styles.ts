import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: #212934 !important;

  nav {
    max-height: 40px;
    font-size: 0.8em !important;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0rem;

    @media (min-width: 992px) {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
  }
`;

export const Container = styled.header`
  width: 100%;
  padding-right: calc(1.5rem * 1.5);
  padding-left: calc(1.5rem * 1.5);
  margin-right: auto;
  margin-left: auto;
  color: #cfd6e1 !important;
`;

export const Row = styled.header`
  width: 100%;
  display: flex !important;
  justify-content: space-between !important;
  a {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
    color: #cfd6e1;
    text-decoration: none !important;
  }
`;
