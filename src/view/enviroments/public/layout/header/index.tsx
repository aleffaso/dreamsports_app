import * as S from './styles';
import Link from 'next/link';
import Image from 'next/image';
import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  Phone,
  TwitterLogo
} from 'phosphor-react';
import { Menu } from './components/menu';
import { Bar } from './components/bar';

export const Header = () => {
  return (
    <S.Wrapper>
      <S.ContactBar>
        <S.Container>
          <div>
            <EnvelopeSimple />
            <Link href="mailto:ravitejakolla29@gmail.com"> info@company.com</Link>
            <Phone />
            <Link href="tel:010-020-0340"> 010-020-0340</Link>
          </div>
          <div>
            <Link href="mailto:ravitejakolla29@gmail.com">
              <FacebookLogo />
            </Link>
            <Link href="mailto:ravitejakolla29@gmail.com">
              <InstagramLogo />
            </Link>
            <Link href="mailto:ravitejakolla29@gmail.com">
              <LinkedinLogo />
            </Link>
            <Link href="mailto:ravitejakolla29@gmail.com">
              <TwitterLogo />
            </Link>
          </div>
        </S.Container>
      </S.ContactBar>
      <S.Header>
        <S.Container>
          <Link href="/">
            <Image
              src="/logo.png"
              width={100}
              height={50}
              alt="Logotipo Dream Sports Co"
              style={{ width: 'auto', height: '67px' }}
            />
          </Link>
          <Menu />
          <Bar />
        </S.Container>
      </S.Header>
    </S.Wrapper>
  );
};
