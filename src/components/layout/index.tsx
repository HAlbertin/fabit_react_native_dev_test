import React from 'react';
import * as S from './styles';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return <S.FullSafeAreaView edges={['right', 'left', 'bottom']}>{children}</S.FullSafeAreaView>;
};

export default Layout;
