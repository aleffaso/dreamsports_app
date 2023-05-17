import { X } from 'phosphor-react';
import * as S from './styles';
import { Form } from 'react-final-form';
import { Input } from '../../../../../../components/form/input';
import { Button } from '../../../../../../components/buttons/button';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useAuth } from '../../../../../../../hooks/auth';
import { useRouter } from 'next/router';
import { useOnRequest } from '../../../../../../../hooks/on-request';

type Props = {
  handleClose: () => void;
};

export const ModalLogin = ({ handleClose }: Props) => {
  const { authenticate } = useAuth();
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { onRequest, isError, textError } = useOnRequest();

  const handleSubmit = async ({ email, password }: { email: string; password: string }) => {
    const { data, error } = await authenticate(email, password);

    if (error || data.message || data.statusCode) {
      console.log(data);
      onRequest.error(data.message);
      return;
    }

    router.push('/about');
    return;
  };
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      contentRef.current && !contentRef.current.contains(e.target as Node) && handleClose();
    },
    [handleClose]
  );
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [handleClickOutside]);
  return (
    <S.Wrapper>
      <div className="content" ref={contentRef}>
        <button className="close" onClick={handleClose}>
          <X />
        </button>
        <h2>Entrar</h2>
        {isError && <p>{textError}</p>}
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Input label="E-mail" name="email" placeholder="Seu e-mail" type="text" />
              <Input label="Senha" name="password" placeholder="Sua senha" type="password" />
              <Button title="Entrar" type="submit" />
            </form>
          )}
        />
      </div>
    </S.Wrapper>
  );
};
