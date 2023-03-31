import Link from 'next/link';
import { CategoriesCatalogue } from '../../../../home-page/components/sections/categories/mapped';
import { menuList } from '../../../header/components/menu/mapped';
import { Article } from './components/article';
import { listAddress } from './mapped';
import * as S from './styles';

export const Info = () => {
  return (
    <S.Wrapper>
      <Article
        title="DreamSports"
        content={
          <>
            {listAddress.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.icon}
                {item.title}
              </Link>
            ))}
          </>
        }
      />
      <Article
        title="Categorias"
        content={
          <>
            {CategoriesCatalogue.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.title}
              </Link>
            ))}
          </>
        }
      />
      <Article
        title="Informações"
        content={
          <>
            {menuList.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.title}
              </Link>
            ))}
          </>
        }
      />
    </S.Wrapper>
  );
};
