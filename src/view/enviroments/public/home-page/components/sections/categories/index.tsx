import Image from 'next/image';
import { Button } from '../../../../../../components/buttons/button';
import { Card } from '../../../../../../components/card';
import { categoriesCatalogue } from './mapped';
import * as S from './styles';

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
                <Image src={item.src} alt={item.title} width={300} height={300} />
                <span>{item.title}</span>
                <Button title="Comprar" color={'neutral'} />
              </S.CategoryBody>
            ))}
          </>
        }
      />
    </S.Wrapper>
  );
};
