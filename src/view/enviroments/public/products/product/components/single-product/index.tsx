import Image from 'next/image';
import * as S from './styles';
import { useRouter } from 'next/router';
import { productsList } from '../../../mapped';
import { formatCurrency } from '../../../../../../../utils';
import { StarRating } from '../../../../../../components/star-rating';
import { Button } from '../../../../../../components/buttons/button';
import { RadioButton } from 'phosphor-react';

export const SingleProduct = () => {
  const router = useRouter();
  const id = router.query.id;
  const product = productsList.find((item) => item.id == Number(id));
  return (
    <S.Wrapper>
      <S.ImageContainer>
        {product && <Image src={product.src} alt={product.title} width={700} height={350} />}
        <div>
          {product &&
            product.url_image.map((item, index) => (
              <Image key={index} src={item.url} alt={item.title} width={400} height={300} />
            ))}
        </div>
      </S.ImageContainer>
      <S.InfoContainer>
        <h1 className="title">{product && product.title}</h1>
        <h2 className="price">{product && formatCurrency(product.price)}</h2>
        <div className="rating">
          <h4>Avaliações:</h4>
          {product && <StarRating rating={product.rating} />}
        </div>

        <div className="info">
          <h3>Mais informações</h3>
          <div className="brand">
            <h4>Marca:</h4>
            <p>{product && product.brand}</p>
          </div>

          <div className="description">
            <h4>Descrição:</h4>
            <p>{product && product.description}</p>
          </div>

          <div className="inventory">
            <h4>Em estoque:</h4>
            <p>{product && product.inventory}</p>
          </div>

          <div className="specifications">
            <h4>Especificações:</h4>
            {product &&
              product.specifications.map((item, index) => (
                <Button
                  key={index}
                  title={item}
                  color="neutral"
                  icon={<RadioButton />}
                  rounded
                  variant="solid"
                />
              ))}
          </div>

          <div className="colors">
            <h4>Cores disponíveis:</h4>
            {product &&
              product.colors.map((item, index) => (
                <Button
                  key={index}
                  title={item}
                  color="neutral"
                  icon={<RadioButton />}
                  rounded
                  variant="solid"
                />
              ))}
          </div>

          <div className="sizes">
            <h4>Tamanhos disponíveis:</h4>
            {product &&
              product.sizes.map((item, index) => (
                <Button
                  key={index}
                  title={item}
                  color="neutral"
                  icon={<RadioButton />}
                  rounded
                  variant="solid"
                />
              ))}
          </div>
        </div>
      </S.InfoContainer>
    </S.Wrapper>
  );
};
