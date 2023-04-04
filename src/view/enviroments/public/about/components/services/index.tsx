import { Card } from '../../../../../components/card';
import { servicesList } from './mapped';
import * as S from './styles';

export const Services = () => {
  return (
    <S.Wrapper>
      <h1>Nossos Serviços</h1>
      <p>Buscamos sempre trazer o melhor para nossos clientes</p>
      <Card
        content={
          <>
            {servicesList.map((item, index) => (
              <S.ServiceBody key={index}>
                {item.icon}
                <span>{item.title}</span>
              </S.ServiceBody>
            ))}
          </>
        }
      />
    </S.Wrapper>
  );
};
