import styled from 'styled-components';
import { Device } from '../../../../../../../helpers/screens';

export const Wrapper = styled.section`
  width: 100%;
  position: relative;
  height: 70vh;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  flex: 0 0 100%;
  min-width: 0;
  position: relative;
`;

export const AlignActionSlide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 24px;

  @media ${Device.max('mobile', 'lg')} {
    display: none;
  }
`;
