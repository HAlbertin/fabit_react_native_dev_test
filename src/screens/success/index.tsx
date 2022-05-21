import React from 'react';
import DialogContent from '../../components/dialogContent';
import * as S from './styles';

const SuccessScreen: React.FC = () => {
  return (
    <S.Container>
      <DialogContent
        icon={<S.SuccessEmailIcon />}
        title="EmailScreen_SuccessEmail_Title"
        subtitle="EmailScreen_SuccessEmail_Subtitle"
      />
    </S.Container>
  );
};

export default SuccessScreen;
