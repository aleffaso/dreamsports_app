import { MagnifyingGlass, ShoppingCart, User, X } from 'phosphor-react';
import { Button } from '../../../../../../components/buttons/button';
import * as S from './styles';
import { BarListType } from './types';
import { Form } from 'react-final-form';
import { Input } from '../../../../../../components/form/input';
import { useState } from 'react';
import { ModalLogin } from '../modal-login';

export const Bar = () => {
  const [openModal, setOpenModal] = useState(false);
  const barList: BarListType[] = [
    {
      color: 'transparent',
      icon: <MagnifyingGlass />
    },
    {
      color: 'transparent',
      icon: <ShoppingCart />
    },
    {
      color: 'transparent',
      icon: <User />,
      onClick: () => setOpenModal((old) => !old)
    }
  ];
  return (
    <>
      <S.Wrapper>
        {barList.map((item, index) => (
          <Button key={index} color={item.color} icon={item.icon} onClick={item.onClick} />
        ))}
      </S.Wrapper>
      {openModal && <ModalLogin handleClose={() => setOpenModal((old) => !old)} />}
    </>
  );
};
