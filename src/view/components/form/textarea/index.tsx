import { ReactNode } from 'react';
import { Label } from '../styles';
import { TextareaPure } from './components/textarea.pure';
import { TextareaField } from './components/textarea.field';
import * as S from './styles';

export type TextareaProps = {
  label?: string;
  name: string;
  icon?: ReactNode;
  placeholder?: string;
  hidden?: boolean;
  notForm?: boolean;
};

export const Textarea = ({ label, name, icon, placeholder, hidden, notForm }: TextareaProps) => {
  return (
    <S.Wrapper hasIcon={!!icon}>
      {label && <Label>{label}</Label>}
      <div className="container">
        {icon && <i>{icon}</i>}
        {notForm ? <TextareaPure {...{ placeholder }} /> : null}
        {!notForm ? <TextareaField {...{ name, placeholder }} /> : null}
      </div>
    </S.Wrapper>
  );
};
