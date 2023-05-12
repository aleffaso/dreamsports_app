import Image from 'next/image';
import * as S from './styles';
import { useAuth } from '../../../../../../hooks/auth';

export const AboutUs = () => {
  const { user } = useAuth();
  return (
    <S.Wrapper>
      <div>
        <h1>Sobre nós</h1>
        <div>{JSON.stringify(user)}</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <Image src="/about-us.svg" alt="" width={400} height={500} />
    </S.Wrapper>
  );
};
