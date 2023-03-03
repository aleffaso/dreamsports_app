import * as S from './styles';
type Props = { title: string; content: React.ReactNode };
export const Article = ({ title, content }: Props) => {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <div>{content}</div>
    </S.Wrapper>
  );
};
