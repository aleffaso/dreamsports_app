import * as S from './styles';
type Props = { content: React.ReactNode };

export const Subscribe = ({ content }: Props) => {
  return (
    <S.Wrapper>
      <div>{content}</div>
    </S.Wrapper>
  );
};
