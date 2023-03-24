import Image from 'next/image';
import { Card } from './components/card';
import { ProductsCatalogue } from './mapped';
import * as S from './styles';
import { StarRating } from '../../../../components/star-rating';
import { formatCurrency } from '../../../../../utils';

export const Products = () => {
  return (
    <S.Wrapper>
      <Card
        content={
          <>
            {ProductsCatalogue.map((item, index) => (
              <S.CardBody key={index}>
                <Image src={item.src} alt={item.title} width={300} height={250} />
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
            {/**TODO Verificar numeros produtos e adequar para o comportamento de display grid */}
          </>
        }
      />
    </S.Wrapper>
  );
};
