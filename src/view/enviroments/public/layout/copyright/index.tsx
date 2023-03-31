import { currentYear } from '../../../../../utils';
import * as S from './styles';

export const Copyright = () => {
  return (
    <S.Wrapper>
      <h4>DreamSportsCo</h4>
      <h4>Copyright © {currentYear()}</h4>
    </S.Wrapper>
  );
};
