import Image from 'next/image';
import * as S from './styles';
import { useRouter } from 'next/router';
import { productsList } from '../../../../mapped';
import { findMainImage, formatCurrency } from '../../../../../../../utils';
import { StarRating } from '../../../../../../components/star-rating';
import { Button } from '../../../../../../components/buttons/button';
import { CurrencyCircleDollar, RadioButton, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';

export const SingleProduct = (): JSX.Element | any => {
  const router = useRouter();
  const id = router.query.id;

  const product = productsList.find((item) => item.id === Number(id));

  const [imageMain, setImageMain] = useState<{ id: number; src: string } | undefined>(undefined);

  const handleImageMain = (id: number, src: string) => {
    return setImageMain({ id, src });
  };
  return (
    product && (
      <S.Wrapper>
        <S.ImageContainer>
          <div className="main-image">
            <Image
              src={`/products/lg/${imageMain?.src ?? findMainImage(product?.images)}`}
              style={{ objectFit: 'cover' }}
              alt={product.title}
              sizes="50vw"
              fill
            />
          </div>
          <div className="thumb-image">
            {product.images?.map((item) => (
              <button
                className={imageMain?.id === item.id ? 'selected' : ''}
                key={item.id}
                onClick={() => handleImageMain(item.id, item.src)}>
                <Image
                  src={`/products/sm/${item.src}`}
                  style={{ objectFit: 'cover' }}
                  alt={item.title}
                  sizes="50vw"
                  fill
                />
              </button>
            ))}
          </div>
        </S.ImageContainer>
        <S.InfoContainer>
          <h1 className="title">{product.title}</h1>
          <h2 className="price">{formatCurrency(product.price)}</h2>
          <div className="rating">
            <h4>Avaliações:</h4>
            {<StarRating rating={product.rate} />}
          </div>

          <div className="info">
            <h3>Mais informações</h3>
            <div className="brand">
              <h4>Marca:</h4>
              <p>{product.brand}</p>
            </div>

            <div className="description">
              <h4>Descrição:</h4>
              <p>{product.description}</p>
            </div>

            <div className="inventory">
              <h4>Em estoque:</h4>
              <p>{product.inventory}</p>
            </div>

            <div className="specifications">
              <h4>Especificações:</h4>
              <p>{product.specifications}</p>
            </div>

            <div className="colors">
              <h4>Cores disponíveis:</h4>
              <div>
                {product.colors.map((item, index) => (
                  <Button
                    key={index}
                    title={item.name}
                    color="neutral"
                    icon={<RadioButton />}
                    rounded
                    variant="solid"
                  />
                ))}
              </div>
            </div>

            <div className="sizes">
              <h4>Tamanhos disponíveis:</h4>
              <div>
                {product.sizes.map((item, index) => (
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
          </div>
          <div>
            <Button
              title="Adicionar ao carrinho"
              color={'neutral'}
              icon={<ShoppingCart weight="fill" />}
            />
            <Button title="Comprar" color={'green'} icon={<CurrencyCircleDollar weight="fill" />} />
          </div>
        </S.InfoContainer>
      </S.Wrapper>
    )
  );
};
