import Image from 'next/image';
import * as S from './styles';

export const AboutUs = () => {
  return (
    <S.Wrapper>
      <div>
        <h1>Sobre nós</h1>
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
