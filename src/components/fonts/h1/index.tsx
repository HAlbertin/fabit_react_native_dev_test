import { memo } from 'react';
import { translate } from '../../../utils/language';
import { TranslationKeys } from '../../../utils/language/translations/translations.interface';
import { StyledH1 } from '../styles';

type Props = {
  text: TranslationKeys;
};

const H1: React.FC<Props> = ({ text }) => {
  return <StyledH1>{translate(text)}</StyledH1>;
};

export default memo(H1);
