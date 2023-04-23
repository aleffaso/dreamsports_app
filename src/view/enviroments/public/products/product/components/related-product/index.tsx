import Link from 'next/link';
import { Card } from '../../../../../../components/card';
import { productsList } from '../../../../mapped';
import * as S from './styles';
import Image from 'next/image';
import { StarRating } from '../../../../../../components/star-rating';
import { Button } from '../../../../../../components/buttons/button';
import { ShoppingCart } from 'phosphor-react';
import { formatCurrency } from '../../../../../../../utils';
import { useRouter } from 'next/router';

export const RelatedProduct = () => {
  const router = useRouter();
  const category = router.query.Category;
  const number = 0;
  return (
    <S.Wrapper>
      <h1>Produtos relacionados</h1>
      <Card
        paddingSide={0}
        content={
          <>
            {productsList.map(
              (item, index) =>
                item.category[number].title === category && (
                  <S.CardBody key={index}>
                    <Link
                      href={`/products/${item.id}?Product=${item.slug}?&Category=${item.category[number].title}`}>
                      <Image
                        src={`/products/sm/${item.src}`}
                        alt={item?.title}
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
                    <Link
                      className="product-title"
                      href={`/products/${item.id}?Product=${item.slug}?&Category=${item.category[number].title}`}>
                      {item.title}
                    </Link>
                    <Button
                      title="Adicionar ao carrinho"
                      color={'neutral'}
                      icon={<ShoppingCart weight="fill" />}
                    />
                  </S.CardBody>
                )
            )}
          </>
        }
      />
    </S.Wrapper>
  );
};
