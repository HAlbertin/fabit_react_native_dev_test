import { memo } from 'react';
import { translate } from '../../../utils/language';
import { TranslationKeys } from '../../../utils/language/translations/translations.interface';
import { StyledTypography } from '../styles';

type Props = {
  text: TranslationKeys | string;
  needsTranslate?: boolean;
  color?: string;
  fontSize?: number;
};

const Typography: React.FC<Props> = ({ text, color, fontSize, needsTranslate = false }) => {
  return (
    <StyledTypography fontSize={fontSize} color={color}>
      {needsTranslate ? translate(text as TranslationKeys) : text}
    </StyledTypography>
  );
};

export default memo(Typography, (p, n) => p.text === n.text);
