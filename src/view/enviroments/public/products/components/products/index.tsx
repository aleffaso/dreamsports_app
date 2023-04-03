import Image from 'next/image';
import { CaretDown, MagnifyingGlass, ShoppingCart } from 'phosphor-react';
import { formatCurrency } from '../../../../../../utils';
import { Button } from '../../../../../components/buttons/button';
import { Card } from '../../../../../components/card';
import { StarRating } from '../../../../../components/star-rating';
import { CategoriesCatalogue } from '../../../home-page/components/sections/categories/mapped';
import { productsList } from './mapped';
import * as S from './styles';

export const Products = () => {
  return (
    <S.Wrapper>
      <div>
        <S.Categories>
          <h2>Categorias</h2>
          <hr />
          <div>
            <span>Preços</span>
            <Button color="neutral" icon={<CaretDown weight="fill" />} />
          </div>
          <hr />
          <div>
            <span>Cores</span>
            <Button color="neutral" icon={<CaretDown weight="fill" />} />
          </div>
        </S.Categories>
        <S.Products>
          <S.SearchBar>
            <div>
              {CategoriesCatalogue.map((item, index) => (
                <a key={index} href={item.src}>
                  {item.title}
                </a>
              ))}
            </div>
            <div>
              <input placeholder="Buscar"></input>
              <Button color="neutral" icon={<MagnifyingGlass weight="fill" />} />
            </div>
          </S.SearchBar>
          <Card
            content={
              <>
                {productsList.map((item, index) => (
                  <S.CardBody key={index}>
                    <Image src={item.src} alt={item.title} width={400} height={300} />
                    <div className="ratingPrice">
                      <div>
                        <StarRating rating={item.rating} />
                      </div>
                      {formatCurrency(item.price)}
                    </div>
                    <span>{item.title}</span>
                    <Button
                      title="Comprar"
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
