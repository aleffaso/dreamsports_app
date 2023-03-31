import { CaretLeft, CaretRight } from 'phosphor-react';
import { MouseEventHandler } from 'react';

import * as S from './styles';
type Props = { onClick: MouseEventHandler; enabled: boolean; direction: 'left' | 'right' };

export const ArrowButton = ({ onClick, enabled, direction }: Props) => {
  return (
    <S.Wrapper onClick={onClick} disabled={enabled}>
      {direction === 'left' && <CaretLeft />}
      {direction === 'right' && <CaretRight />}
    </S.Wrapper>
  );
};
