import * as S from './styles';
type Props = { content: React.ReactNode; paddingSide?: number };

export const Card = ({ content, paddingSide }: Props) => {
  return (
    <S.Wrapper paddingSide={paddingSide}>
      <div>{content}</div>
    </S.Wrapper>
  );
};
