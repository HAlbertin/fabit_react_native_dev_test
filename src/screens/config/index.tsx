import React from 'react';
import { Text } from 'react-native';
import { translate } from '../../utils/language';
import * as S from './styles';

const ConfigScreen: React.FC = () => (
  <S.Content>
    <Text>{translate('ConfigScreen_Welcome')}</Text>
    <S.ArrowDownIcon />
  </S.Content>
);

export default ConfigScreen;
