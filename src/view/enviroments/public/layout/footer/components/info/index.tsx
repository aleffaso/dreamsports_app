import Link from 'next/link';
import { MapPin } from 'phosphor-react';
import { Article } from './components/article';
import * as S from './styles';

const listAddress = [{ title: 'DreamSports', icon: <MapPin weight="fill" />, href: '/' }];
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
    </S.Wrapper>
  );
};
