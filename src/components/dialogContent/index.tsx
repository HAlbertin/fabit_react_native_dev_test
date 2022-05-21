import React, { memo } from 'react';
import { theme } from '../../theme';
import { TranslationKeys } from '../../utils/language/translations/translations.interface';
import H1 from '../fonts/h1';
import Typography from '../fonts/typography';
import * as S from './styles';

type Props = {
  icon: React.ReactNode;
  title: TranslationKeys;
  subtitle?: TranslationKeys;
};
const DialogContent: React.FC<Props> = ({ icon, title, subtitle }) => {
  return (
    <S.Container>
      <S.IconContainer>{icon}</S.IconContainer>

      <S.TextContainer>
        <H1 text={title} color={theme.colors.secondary} bold />
      </S.TextContainer>

      {subtitle && (
        <S.TextContainer>
          <Typography
            testID="dialog-content-title"
            text={subtitle}
            center
            color={theme.colors.secondary}
            bold
            needsTranslate
            fontSize={21}
          />
        </S.TextContainer>
      )}
    </S.Container>
  );
};

export default memo(DialogContent, (p, n) => p.title === n.title);
