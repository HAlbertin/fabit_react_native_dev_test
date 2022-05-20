import React, { memo } from 'react';
import { theme } from '../../theme';
import Typography from '../fonts/typography';
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
          <Typography text={text} color={theme.colors.absolutes.gray} />
        </S.TextContainer>

        {arrowRight ? <S.ArrowRightIcon /> : <S.ArrowDownIcon />}
      </S.TextInputSelect>
    </S.Container>
  );
};

export default memo(InputSelect, (p, n) => p.text === n.text);
