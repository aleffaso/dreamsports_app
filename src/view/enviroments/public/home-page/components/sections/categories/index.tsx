import Image from 'next/image';
import { Button } from '../../../../../../components/buttons/button';
import { Card } from '../../../../../../components/card';
import { CategoriesCatalogue } from './mapped';
import * as S from './styles';

export const Categories = () => {
  return (
    <S.Wrapper>
      <h1>Categories of The Month</h1>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est.
      </p>
      <Card
        content={
          <>
            {CategoriesCatalogue.map((item, index) => (
              <S.CategoryBody key={index}>
                <Image src={item.src} alt={item.title} width={300} height={300} />
                <span>{item.title}</span>
                <Button title="Go Shop" color={'neutral'} />
              </S.CategoryBody>
            ))}
          </>
        }
      />
    </S.Wrapper>
  );
};
