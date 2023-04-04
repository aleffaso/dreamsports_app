import * as S from './styles';
import Link from 'next/link';
import Image from 'next/image';
import { EnvelopeSimple, Phone } from 'phosphor-react';
import { Menu } from './components/menu';
import { Bar } from './components/bar';
import { BREAK_POINTS } from '../../../../../helpers/screens';
import { addressList, contactsList } from './components/menu/mapped';

export const Header = () => {
  return (
    <S.Wrapper>
      <S.ContactBar>
        <div>
          {addressList.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.icon}
              {item.title}
            </Link>
          ))}
        </div>
        <div>
          {contactsList.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.icon}
            </Link>
          ))}
        </div>
      </S.ContactBar>
      {/**TODO: fix header into page */}
      <S.Header>
        <S.Container>
          <S.Logo>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logotipo Dream Sports Co"
                fill
                sizes={`(max-width:${BREAK_POINTS.mobile.lg}px) 33%`}
              />
            </Link>
          </S.Logo>
          <Menu />
          <Bar />
        </S.Container>
      </S.Header>
    </S.Wrapper>
  );
};
