import Link from 'next/link';
import { List } from 'phosphor-react';
import { useState } from 'react';
import { menuList } from './mapped';
import * as S from './styles';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Wrapper isOpen={isOpen}>
      <div>
        {menuList.map((item, index) => (
          <Link href={item.href} key={index}>
            {item.name}
          </Link>
        ))}
      </div>
      <S.HamburgerMenu onClick={() => setIsOpen((old) => !old)}>
        <List />
      </S.HamburgerMenu>
    </S.Wrapper>
  );
};
