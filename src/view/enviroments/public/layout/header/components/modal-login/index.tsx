import { X } from 'phosphor-react';
import * as S from './styles';
import { Form } from 'react-final-form';
import { Input } from '../../../../../../components/form/input';
import { Button } from '../../../../../../components/buttons/button';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useAuth } from '../../../../../../../hooks/auth';
import { useRouter } from 'next/router';

type Props = {
  handleClose: () => void;
};

export const ModalLogin = ({ handleClose }: Props) => {
  const { authenticate } = useAuth();
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState<string | undefined>(undefined);
  const handleSubmit = async ({ email, password }: { email: string; password: string }) => {
    try {
      const { data, error, messageError } = await authenticate(email, password);
      if (error) {
        setError(messageError);
        return;
      }
      console.log('aqui');
      router.push(PUBLIC_ROUTES.ABOUT);
    } catch {
      throw new Error('Problema na autenticação');
    }
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
