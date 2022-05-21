import { memo } from 'react';
import { translate } from '../../../utils/language';
import { TranslationKeys } from '../../../utils/language/translations/translations.interface';
import { StyledH1 } from '../styles';

type Props = {
  text: TranslationKeys;
  color?: string;
  bold?: boolean;
};

const H1: React.FC<Props> = ({ text, color, bold }) => {
  return (
    <StyledH1 color={color} bold={bold}>
      {translate(text)}
    </StyledH1>
  );
};

export default memo(H1);
