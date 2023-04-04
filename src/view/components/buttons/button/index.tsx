import { MouseEventHandler } from 'react';
import * as S from './styles';

export type Props = {
  variant?: string | 'solid' | 'outline';
  rounded?: boolean;
  color?: string | 'primary' | 'neutral' | 'success' | 'warning' | 'error' | 'transparent';
  icon?: React.ReactNode;
  title?: string | number;
  description?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: MouseEventHandler;
};

export const Button = ({
  variant,
  rounded,
  color,
  icon,
  title,
  description,
  type,
  disabled,
  onClick
}: Props) => {
  return (
    <S.Wrapper
      variant={variant}
      rounded={rounded}
      color={color}
      type={type}
      disabled={disabled}
      onClick={onClick}>
      {icon ?? null}
      {title ?? ''}
    </S.Wrapper>
  );
};
