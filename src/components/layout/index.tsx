import { useNavigation } from '@react-navigation/native';
import React, { memo, useEffect } from 'react';
import { translate } from '../../utils/language';
import { TranslationKeys } from '../../utils/language/translations/translations.interface';
import * as S from './styles';

type Props = {
  headerTitle?: TranslationKeys;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ headerTitle, children }) => {
  const navigation = useNavigation();
  useEffect(() => {
    headerTitle && navigation.setOptions({ headerTitle: translate(headerTitle) });
  }, [headerTitle, navigation]);

  return <S.FullSafeAreaView edges={['right', 'left', 'bottom']}>{children}</S.FullSafeAreaView>;
};

export default memo(Layout);
