import React from 'react';
import { ActivityIndicator, Portal } from 'react-native-paper';
import * as S from './styles';

const Loading: React.FC = () => (
  <Portal>
    <S.Container>
      <ActivityIndicator size="large" />
    </S.Container>
  </Portal>
);

export default Loading;
