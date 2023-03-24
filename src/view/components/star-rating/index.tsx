import { Star } from 'phosphor-react';
import * as S from './styles';

type Props = { rating: number };

export const StarRating = ({ rating }: Props) => {
  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <S.Wrapper isActive={index <= rating - 1} key={index}>
            <Star weight="fill" />
          </S.Wrapper>
        ))}
    </>
  );
};
