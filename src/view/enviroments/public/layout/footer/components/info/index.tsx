import Link from 'next/link';
import { Article } from './components/article';
import { listAddress, listProducts, listInfo } from './components/article/mapped';
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
        title="Products"
        content={
          <>
            {listProducts.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.title}
              </Link>
            ))}
          </>
        }
      />
      <Article
        title="Information"
        content={
          <>
            {listInfo.map((item, index) => (
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
