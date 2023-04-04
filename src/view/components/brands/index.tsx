import Image from 'next/image';
import { Card } from '../card';
import { brandsList } from './mapped';
import * as S from './styles';

export const Brands = () => {
  return (
    <S.Wrapper>
      <h1>Nossas marcas</h1>
      <p>Trazendo qualidade através dos melhores fabricantes</p>
      <Card
        content={
          <>
            {brandsList.map((item, index) => (
              <S.BrandBody key={index}>
                <Image src={item.src} alt={item.alt} width={item.width} height={item.height} />
              </S.BrandBody>
            ))}
          </>
        }
      />
    </S.Wrapper>
  );
};
