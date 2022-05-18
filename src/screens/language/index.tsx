import React, { useState } from 'react';
import Bottomsheet from '../../components/bottomsheet';
import { H1 } from '../../components/fonts/styles';
import InputSelect from '../../components/inputSelect';
import Layout from '../../components/layout';
import { translate } from '../../utils/language';
import * as S from './styles';

const LanguageScreen: React.FC = () => {
  // const languages = LANGUAGES.map(item => {
  //   return {
  //     label: item.lang,
  //     value: item.lang,
  //   };
  // });

  const [showBottomsheet, setShowBottomsheet] = useState(false);

  return (
    <Layout>
      <S.Content>
        <S.Circle />
        <S.TextContainer>
          <H1>{translate('LanguageScreen_SelectLanguage')}</H1>
        </S.TextContainer>
        <InputSelect onClick={() => console.log('click')} text={'English'} />

        <Bottomsheet visible={showBottomsheet} onDismiss={() => setShowBottomsheet(false)}></Bottomsheet>
      </S.Content>
    </Layout>
  );
};

export default LanguageScreen;
