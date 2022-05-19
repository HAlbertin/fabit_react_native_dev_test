import { memo } from 'react';
import { theme } from '../../theme';
import { Typography } from '../fonts/styles';
import * as S from './styles';

type Props = {
  onClick: () => void;
  text: string;
  arrowRight?: boolean;
};

const InputSelect: React.FC<Props> = ({ onClick, text, arrowRight }) => {
  return (
    <S.Container testID="input-select-container" onPress={onClick}>
      <S.TextInputSelect>
        <S.TextContainer>
          <Typography color={theme.colors.absolutes.gray}>{text}</Typography>
        </S.TextContainer>

        {arrowRight ? <S.ArrowRightIcon /> : <S.ArrowDownIcon />}
      </S.TextInputSelect>
    </S.Container>
  );
};

export default memo(InputSelect, (p, n) => p.text === n.text);
