import Image from 'next/image';
import { Card } from '../../../../../../components/card';
import { productsCatalogue } from './mapped';
import * as S from './styles';
import { StarRating } from '../../../../../../components/star-rating';
import { formatCurrency } from '../../../../../../../utils';
import { Button } from '../../../../../../components/buttons/button';
import { Eye } from 'phosphor-react';
import Link from 'next/link';

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
                <Link href={`/products/${item.id}?Product=${item.slug}?&Category=${item.category}`}>
                  <Image src={item.src} alt={item.title} width={400} height={300} />
                </Link>
                <div className="ratingPrice">
                  <div>
                    <StarRating rating={item.rating} />
                  </div>
                  {formatCurrency(item.price)}
                </div>
                <span>{item.title}</span>
                <p>{item.info}</p>
                <Link href={`/products/${item.id}?Product=${item.slug}?&Category=${item.category}`}>
                  <Button title="Ver mais" color={'neutral'} icon={<Eye weight="fill" />} />
                </Link>
              </S.CardBody>
            ))}
          </>
        }
      />
    </S.Wrapper>
  );
};
