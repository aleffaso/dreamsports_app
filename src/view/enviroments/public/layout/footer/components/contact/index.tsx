import Link from 'next/link';
import { Contacts } from './components/contacts';
import { listContacts } from './components/contacts/mapped';
import { Subscribe } from './components/subscribe';
import * as S from './styles';

export const Contact = () => {
  return (
    <S.Wrapper>
      <Contacts
        content={
          <>
            {listContacts.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.icon}
              </Link>
            ))}
          </>
        }
      />
      <Subscribe
        content={
          <>
            <form>
              <input type="text" placeholder="E-mail" />
              <button type="submit">Subscribe</button>
            </form>
          </>
        }
      />
    </S.Wrapper>
  );
};
