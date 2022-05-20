import { translate } from '../../../utils/language';
import { TranslationKeys } from '../../../utils/language/translations/translations.interface';
import { StyledTypography } from '../styles';

type Props = {
  text: TranslationKeys | string;
  testID: string;
  needsTranslate?: boolean;
  color?: string;
  fontSize?: number;
  center?: boolean;
  bold?: boolean;
};

const Typography: React.FC<Props> = ({ center, text, testID, color, fontSize, bold, needsTranslate = false }) => {
  return (
    <StyledTypography bold={bold} center={center} testID={testID} fontSize={fontSize} color={color}>
      {needsTranslate ? translate(text as TranslationKeys) : text}
    </StyledTypography>
  );
};

export default Typography;
