import Image from 'next/image';
import { Card } from '../../../../../../components/card';
import { ProductsCatalogue } from './mapped';
import * as S from './styles';
import { StarRating } from '../../../../../../components/star-rating';
import { formatCurrency } from '../../../../../../../utils';

export const Products = () => {
  return (
    <S.Wrapper>
      <h1>Produtos</h1>
      <p>Já disponíveis para sua bike</p>
      <Card
        content={
          <>
            {ProductsCatalogue.map((item, index) => (
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
              </S.CardBody>
            ))}
          </>
        }
      />
    </S.Wrapper>
  );
};
