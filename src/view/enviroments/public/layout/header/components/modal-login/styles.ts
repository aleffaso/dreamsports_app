import styled from 'styled-components';
import { DisplayFlexCenter } from '../../../../../../../styles';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 0 24px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  background-color: rgb(0 0 0 /30%);
  backdrop-filter: blur(2px);

  ${DisplayFlexCenter}

  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  & > .content {
    width: min(100%, 400px);

    position: relative;
    padding: 40px;

    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.shades.white};
    box-shadow: 0 0 40px rgb(0 0 0 /55%);

    display: flex;
    flex-direction: column;
    gap: 12px;

    animation: opacity 0.3s linear;

    & > .close {
      background: transparent;
      border: 0;
      outline: none;
      cursor: pointer;

      position: absolute;
      top: 16px;
      right: 16px;

      &:hover {
        opacity: 0.5;
      }

      & > svg {
        font-size: 22px;
      }
    }

    & > h2 {
      width: 100%;
      text-align: center;
    }

    & > form {
      ${DisplayFlexCenter}
      flex-direction: column;
      gap: 15px;
    }
  }
`;
