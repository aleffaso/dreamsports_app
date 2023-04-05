import { PaperPlaneTilt } from 'phosphor-react';
import { Button } from '../../../../../components/buttons/button';
import * as S from './styles';

export const Survey = () => {
  return (
    <S.Wrapper>
      <form action="/">
        <div>
          <label>Nome</label>
          <input placeholder="Seu nome" name="name" />

          <label>E-mail</label>
          <input placeholder="Seu e-mail" name="email" />

          <label>Assunto</label>
          <input placeholder="Assunto" name="subject" />

          <label>Mensagem</label>
          <textarea placeholder="Mensagem" name="message" />

          <Button title="Enviar" type="submit" icon={<PaperPlaneTilt />} />
        </div>
      </form>
    </S.Wrapper>
  );
};
