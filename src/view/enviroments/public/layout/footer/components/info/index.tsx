import Link from 'next/link';
import { categoriesCatalogue } from '../../../../home-page/components/sections/categories/mapped';
import { addressList, menuList } from '../../../header/mapped';
import { Article } from './components/article';
import * as S from './styles';

export const Info = () => {
  return (
    <S.Wrapper>
      <Article
        title="DreamSports"
        content={
          <>
            {addressList.map((item, index) => (
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
            {categoriesCatalogue.map((item, index) => (
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
