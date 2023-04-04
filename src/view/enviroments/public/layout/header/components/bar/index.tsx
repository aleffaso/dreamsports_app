import { MagnifyingGlass, ShoppingCart, User } from 'phosphor-react';
import { Button } from '../../../../../../components/buttons/button';
import * as S from './styles';

export const Bar = () => {
  return (
    <S.Wrapper>
      <Button color="transparent" icon={<MagnifyingGlass />} />
      <Button color="transparent" icon={<ShoppingCart />} />
      <Button color="transparent" icon={<User />} />
    </S.Wrapper>
  );
};
