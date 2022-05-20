import React from 'react';
import { TextInputProps } from 'react-native';
import { theme } from '../../theme';
import { TranslationKeys } from '../../utils/language/translations/translations.interface';
import Typography from '../fonts/typography';
import * as S from './styles';

interface Props {
  errorText: string | undefined;
  leftIcon?: React.ReactNode;
  label: TranslationKeys;
}

const InputText: React.FC<Props & TextInputProps> = ({ errorText, leftIcon, label, ...props }) => {
  const inputTextTheme = { ...theme, colors: { ...theme.colors, primary: 'transparent' } };
  return (
    <S.InputContainer>
      <Typography needsTranslate text={label} color={theme.colors.text} />

      <S.InputText
        autoCapitalize={'none'}
        autoCorrect={false}
        selectionColor={theme.colors.primary}
        underlineColorAndroid="transparent"
        blurOnSubmit={false}
        underlineColor={'transparent'}
        left={leftIcon ?? null}
        theme={inputTextTheme}
        {...props}
      />
      <Typography text={errorText ?? ''} color={theme.colors.error} />
    </S.InputContainer>
  );
};

export default InputText;
