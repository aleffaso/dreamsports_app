import Image from 'next/image';
import { Card } from '../../../../../../components/card';
import * as S from './styles';
import { StarRating } from '../../../../../../components/star-rating';
import { findMainImage, formatCurrency } from '../../../../../../../utils';
import { Button } from '../../../../../../components/buttons/button';
import { Eye } from 'phosphor-react';
import Link from 'next/link';
import { productsList } from '../../../../mapped';

export const Products = () => {
  const number = 0;
  return (
    <S.Wrapper>
      <h1>Produtos</h1>
      <p>Já disponíveis para sua bike</p>
      <Card
        content={
          <>
            {productsList.map(
              (item, index) =>
                index < 3 && (
                  <S.CardBody key={index}>
                    <Link
                      href={`/products/${item.id}?Product=${item.slug}?&Category=${item.category[number].title}`}>
                      <Image
                        src={`/products/lg/${findMainImage(item.images)}`}
                        alt={item.title}
                        width={400}
                        height={300}
                      />
                    </Link>
                    <div className="ratingPrice">
                      <div>
                        <StarRating rating={item.rate} />
                      </div>
                      {formatCurrency(item.price)}
                    </div>
                    <span>{item.title}</span>
                    <p>{item.info}</p>
                    <Link
                      href={`/products/${item.id}?Product=${item.slug}&Category=${item.category[number].title}`}>
                      <Button title="Ver mais" color={'neutral'} icon={<Eye weight="fill" />} />
                    </Link>
                  </S.CardBody>
                )
            )}
          </>
        }
      />
    </S.Wrapper>
  );
};
