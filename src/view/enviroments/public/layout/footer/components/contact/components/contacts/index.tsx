import * as S from './styles';
type Props = { content: React.ReactNode };
export const Contacts = ({ content }: Props) => {
  return (
    <S.Wrapper>
      <div>{content}</div>
    </S.Wrapper>
  );
};
