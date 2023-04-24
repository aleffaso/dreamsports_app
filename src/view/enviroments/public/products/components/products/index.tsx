import Image from 'next/image';
import { CaretDown, MagnifyingGlass, ShoppingCart } from 'phosphor-react';
import { findMainImage, formatCurrency } from '../../../../../../utils';
import { Button } from '../../../../../components/buttons/button';
import { Card } from '../../../../../components/card';
import { StarRating } from '../../../../../components/star-rating';
import { categoriesCatalogue } from '../../../home-page/components/sections/categories/mapped';
import { productsList } from '../../../mapped';
import * as S from './styles';
import Link from 'next/link';

export const Products = () => {
  const number = 0;
  return (
    <S.Wrapper>
      <div>
        <S.Categories>
          <h2>Filtros</h2>
          <div className="filters">
            <div>
              <span>Preços</span>
              <Button color="neutral" icon={<CaretDown weight="fill" />} />
            </div>
            <div>
              <span>Cores</span>
              <Button color="neutral" icon={<CaretDown weight="fill" />} />
            </div>
            <div>
              <span>Tamanhos</span>
              <Button color="neutral" icon={<CaretDown weight="fill" />} />
            </div>
            <div>
              <span>Avaliações</span>
              <Button color="neutral" icon={<CaretDown weight="fill" />} />
            </div>
            <div>
              <span>Em estoque</span>
              <Button color="neutral" icon={<CaretDown weight="fill" />} />
            </div>
          </div>
        </S.Categories>
        <S.Products>
          <S.AuxiliarHeader>
            <div className="categories-button">
              {categoriesCatalogue.map((item, index) => (
                <Button key={index} title={item.title} color="neutral" />
              ))}
            </div>
            <div className="search-bar">
              <input placeholder="Buscar"></input>
              <Button color="neutral" icon={<MagnifyingGlass weight="fill" />} />
            </div>
          </S.AuxiliarHeader>
          <Card
            paddingSide={0}
            content={
              <>
                {productsList.map((item, index) => (
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
                ))}
              </>
            }
          />
          <S.Pagination>
            {productsList.map((item, index) => (
              <Button title={index + 1} key={index} color="neutral" />
            ))}
          </S.Pagination>
        </S.Products>
      </div>
    </S.Wrapper>
  );
};
