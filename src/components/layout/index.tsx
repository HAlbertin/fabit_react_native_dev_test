import React from 'react';
import * as S from './styles';

const Layout = ({ children }) => {
  return <S.FullSafeAreaView edges={['right', 'left', 'bottom']}>{children}</S.FullSafeAreaView>;
};

export default Layout;
