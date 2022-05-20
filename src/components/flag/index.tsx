import React, { memo } from 'react';
import * as flag from '../../assets/flags/_index';
import * as S from './styles';

type Props = {
  isoCode: string;
};

const Flag: React.FC<Props> = ({ isoCode }) => {
  return <S.FlagImage source={flag[isoCode.toLowerCase()]} />;
};

export default memo(Flag);
