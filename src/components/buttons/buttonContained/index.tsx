import React, { memo } from 'react';
import { theme } from '../../../theme';
import { TranslationKeys } from '../../../utils/language/translations/translations.interface';
import Typography from '../../fonts/typography';
import { PrimaryButtonContained } from '../styles';

type Props = {
  text: TranslationKeys;
  disabled?: boolean;
  onPress: () => void;
};

const ButtonContained: React.FC<Props> = ({ text, disabled = false, onPress }) => {
  return (
    <PrimaryButtonContained disabled={disabled} testID="button-contained" onPress={onPress}>
      <Typography color={theme.colors.secondary} needsTranslate text={text} />
    </PrimaryButtonContained>
  );
};

export default memo(ButtonContained);
