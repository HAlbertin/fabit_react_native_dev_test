import React, { memo } from 'react';
import { theme } from '../../theme';
import { TranslationKeys } from '../../utils/language/translations/translations.interface';
import Typography from '../fonts/typography';
import * as S from './styles';

type Props = {
  onClick: () => void;
  title: string;
  label?: TranslationKeys;
  arrowRight?: boolean;
};

const InputSelect: React.FC<Props> = ({ onClick, title, label, arrowRight }) => {
  return (
    <S.Container testID="input-select-container" onPress={onClick}>
      {label && <Typography testID="input-select-label" needsTranslate text={label} color={theme.colors.placeholder} />}

      <S.TextInputSelect>
        <S.TextContainer>
          <Typography bold testID="input-select-text" text={title} color={theme.colors.placeholder} />
        </S.TextContainer>

        {arrowRight ? <S.ArrowRightIcon /> : <S.ArrowDownIcon />}
      </S.TextInputSelect>
    </S.Container>
  );
};

export default memo(InputSelect, (p, n) => p.title === n.title);
