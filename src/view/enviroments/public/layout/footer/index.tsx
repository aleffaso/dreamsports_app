import { Info } from './components/info';
import { Contact } from './components/contact/';
import * as S from './styles';

export const Footer = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Info />
        <Contact />
      </S.Container>
    </S.Wrapper>
  );
};
