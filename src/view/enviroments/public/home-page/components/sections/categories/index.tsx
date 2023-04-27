import Image from 'next/image';
import { Button } from '../../../../../../components/buttons/button';
import { Card } from '../../../../../../components/card';
import { categoriesCatalogue } from './mapped';
import * as S from './styles';
import Link from 'next/link';

export const Categories = () => {
  return (
    <S.Wrapper>
      <h1>Categorias</h1>
      <p>Acompanhe nossos mais recentes lançamentos</p>
      <Card
        content={
          <>
            {categoriesCatalogue.map((item, index) => (
              <S.CategoryBody key={index}>
                <Link href={`/products?category=${item.slug}`}>
                  <Image src={item.src} alt={item.title} width={300} height={300} />
                </Link>
                <span>{item.title}</span>
                <Link href={`/products?category=${item.slug}`}>
                  <Button title="Ver mais" color={'neutral'} />
                </Link>
              </S.CategoryBody>
            ))}
          </>
        }
      />
    </S.Wrapper>
  );
};
