import Link from 'next/link';
import { contactsList } from '../../../mapped';
import { Contacts } from './components/contacts';
import { Subscribe } from './components/subscribe';
import * as S from './styles';

export const Contact = () => {
  return (
    <S.Wrapper>
      <Contacts
        content={
          <>
            {contactsList.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.icon}
              </Link>
            ))}
          </>
        }
      />
      <Subscribe />
    </S.Wrapper>
  );
};
