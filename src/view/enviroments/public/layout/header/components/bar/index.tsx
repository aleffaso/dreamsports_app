import { Button } from '../../../../../../components/buttons/button';
import { barList } from '../../mapped';
import * as S from './styles';

export const Bar = () => {
  return (
    <S.Wrapper>
      {barList.map((item, index) => (
        <Button key={index} color={item.color} icon={item.icon} />
      ))}
    </S.Wrapper>
  );
};
