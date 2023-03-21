import * as S from './styles';
type Props = { title: string; content: React.ReactNode };

export const Card = ({ content }: Props) => {
  return (
    <S.Wrapper>
      <div>{content}</div>
    </S.Wrapper>
  );
};
