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
  defaultValue?: string | number;
  value?: string | number;
  hidden?: boolean;
  mask?: 'CPF' | 'PHONE';
  notForm?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const Input = ({
  label,
  name,
  type,
  icon,
  placeholder,
  hidden,
  value,
  defaultValue,
  mask,
  notForm,
  onChange,
  ...rest
}: InputProps) => {
  return (
    <S.Wrapper hasIcon={!!icon}>
      {label && <Label>{label}</Label>}
      <div className="container">
        {icon && <i>{icon}</i>}
        {notForm ? <InputPure {...{ name, type, placeholder, value, onChange, rest }} /> : null}
        {!notForm ? (
          <InputField {...{ name, type, placeholder, mask, value, defaultValue, rest }} />
        ) : null}
      </div>
    </S.Wrapper>
  );
};
