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
import { BREAK_POINTS } from '../../../../../helpers/screens';

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
