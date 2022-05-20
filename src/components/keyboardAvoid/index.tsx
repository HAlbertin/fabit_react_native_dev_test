import React from 'react';
import * as S from './styles';

type Props = {
  children: React.ReactNode;
};
const KeyboardAvoid: React.FC<Props> = ({ children }) => {
  const THRESHOLD_KEYBOARD = 50;

  return (
    <S.KeyboardAvoid keyboardVerticalOffset={THRESHOLD_KEYBOARD} behavior="padding">
      {children}
    </S.KeyboardAvoid>
  );
};

export default KeyboardAvoid;
