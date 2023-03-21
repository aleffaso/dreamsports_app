import Image from 'next/image';
import { Star } from 'phosphor-react';
import { Card } from './components/card';
import { ProductsCatalogue } from './components/card/mapped';
import { CardBody } from './components/card/styles';
import * as S from './styles';

export const Products = () => {
  return (
    <S.Wrapper>
      <Card
        title=""
        content={
          <>
            {ProductsCatalogue.map((item, index) => (
              <CardBody key={index}>
                <Image src={item.src} alt={item.title} width={300} height={250} />
                <div>
                  <Star weight="fill" /> {item.price}
                  {/**TODO function to show 5 stars according to rating */}
                </div>
                <div>{item.title}</div>
                <div>{item.info}</div>
              </CardBody>
            ))}
          </>
        }
      />
    </S.Wrapper>
  );
};
