import Image from 'next/image';
import { Card } from '../../../../../../components/card';
import { productsCatalogue } from './mapped';
import * as S from './styles';
import { StarRating } from '../../../../../../components/star-rating';
import { formatCurrency } from '../../../../../../../utils';
import { Button } from '../../../../../../components/buttons/button';
import { ShoppingCart } from 'phosphor-react';

export const Products = () => {
  return (
    <S.Wrapper>
      <h1>Produtos</h1>
      <p>Já disponíveis para sua bike</p>
      <Card
        content={
          <>
            {productsCatalogue.map((item, index) => (
              <S.CardBody key={index}>
                <Image src={item.src} alt={item.title} width={400} height={300} />
                <div className="ratingPrice">
                  <div>
                    <StarRating rating={item.rating} />
                  </div>
                  {formatCurrency(item.price)}
                </div>
                <span>{item.title}</span>
                <p>{item.info}</p>
                <Button title="Comprar" color={'neutral'} icon={<ShoppingCart weight="fill" />} />
              </S.CardBody>
            ))}
          </>
        }
      />
    </S.Wrapper>
  );
};
