import Link from 'next/link';
import { MapPin } from 'phosphor-react';
import { Article } from './components/article';
import { listAddress } from './components/article/mapped';
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
    </S.Wrapper>
  );
};
