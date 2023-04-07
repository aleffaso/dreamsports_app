import { ReactNode } from 'react';
import { Label } from '../styles';
import { InputPure } from './components/input.pure';
import { InputField } from './components/input.field';
import * as S from './styles';

export type InputProps = {
  label?: string;
  name: string;
  type: 'text' | 'number' | 'password' | 'date';
  icon?: ReactNode;
  placeholder?: string;
  hidden?: boolean;
  mask?: 'CPF' | 'PHONE';
  notForm?: boolean;
};

export const Input = ({
  label,
  name,
  type,
  icon,
  placeholder,
  hidden,
  mask,
  notForm
}: InputProps) => {
  return (
    <S.Wrapper hasIcon={!!icon}>
      {label && <Label>{label}</Label>}
      <div className="container">
        {icon && <i>{icon}</i>}
        {notForm ? <InputPure {...{ type, placeholder }} /> : null}
        {!notForm ? <InputField {...{ name, type, placeholder, mask }} /> : null}
      </div>
    </S.Wrapper>
  );
};
