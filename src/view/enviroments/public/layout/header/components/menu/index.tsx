import Link from 'next/link';
import { menuList } from './mapped';
import * as S from './styles';

export const Menu = () => {
  return (
    <S.Wrapper>
      {menuList.map((item, index) => (
        <Link href={item.href} key={index}>
          {item.name}
        </Link>
      ))}
    </S.Wrapper>
  );
};
