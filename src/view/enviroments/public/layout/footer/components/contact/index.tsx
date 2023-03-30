import Link from 'next/link';
import { PaperPlaneTilt } from 'phosphor-react';
import { Button } from '../../../../../../components/buttons/button';
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
            {/**Vericar melhor forma de fazer formulário */}
            <form>
              <input type="text" placeholder="E-mail" />
              <Button title="Subscribe" type="submit" icon={<PaperPlaneTilt weight="fill" />} />
            </form>
          </>
        }
      />
    </S.Wrapper>
  );
};
