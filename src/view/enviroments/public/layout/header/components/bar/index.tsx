import Link from 'next/link';
import { MagnifyingGlass, ShoppingCart, User } from 'phosphor-react';
import * as S from './styles';

export const Bar = () => {
  return (
    <S.Wrapper>
      <Link href="/">
        <MagnifyingGlass />
      </Link>
      <Link href="/">
        <ShoppingCart />
      </Link>
      <Link href="/">
        <User />
      </Link>
    </S.Wrapper>
  );
};
