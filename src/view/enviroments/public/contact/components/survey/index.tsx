import { PaperPlaneTilt } from 'phosphor-react';
import { Button } from '../../../../../components/buttons/button';
import * as S from './styles';
import { Form } from 'react-final-form';
import { Input } from '../../../../../components/form/input';
import { GroupInput } from '../../../../../components/form/styles';
import { Textarea } from '../../../../../components/form/textarea';

export const Survey = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <S.Wrapper>
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Input label="Nome" name="name" placeholder="Seu nome" type="text" />
            <Input label="E-mail" name="email" placeholder="Seu e-mail" type="text" />
            <Input label="Assunto" name="subject" placeholder="Assunto" type="text" />
            <Textarea
              label="Mensagem"
              name="message"
              placeholder="Escreva aqui sua mensagem"
              type="text"
            />
            <GroupInput minHeight={60} side="bottom">
              <Button title="Enviar" type="submit" icon={<PaperPlaneTilt />} />
            </GroupInput>
          </form>
        )}
      />
    </S.Wrapper>
  );
};
