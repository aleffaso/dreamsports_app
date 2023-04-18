import { Form } from 'react-final-form';
import * as S from './styles';
import { Input } from '../../../../../../../../components/form/input';
import { Button } from '../../../../../../../../components/buttons/button';
import { At, PaperPlaneTilt } from 'phosphor-react';

export const Subscribe = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <S.Wrapper>
          <form onSubmit={handleSubmit}>
            <Input icon={<At />} name="subscribe" placeholder="Seu e-mail" type="text" />
            <Button title="Se inscrever" type="submit" icon={<PaperPlaneTilt weight="fill" />} />
          </form>
        </S.Wrapper>
      )}
    />
  );
};
