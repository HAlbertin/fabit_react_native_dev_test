import React, { useMemo, useState } from 'react';
import BottomSheetSelection from '../../components/bottomSheetSelection';
import { PrimaryButtonContained } from '../../components/buttons/styles';
import { H1 } from '../../components/fonts/styles';
import InputSelect from '../../components/inputSelect';
import { LANGUAGES_LIST } from '../../constants/language.constants';
import { DEFAULT_LANGUAGE, translate } from '../../utils/language';
import StorageUtils from '../../utils/storage';
import * as S from './styles';

const LanguageScreen: React.FC = () => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [selectedLang, setSelectedLang] = useState(DEFAULT_LANGUAGE);

  const onLangPress = (lang: string) => {
    setSelectedLang(lang);
    setShowBottomSheet(false);
  };

  const showList = () => setShowBottomSheet(true);
  const selectedLangName = useMemo(() => LANGUAGES_LIST.find(l => l.key === selectedLang).value, [selectedLang]);

  const onContinue = () => {
    StorageUtils.setItem('USER_LANGUAGE', selectedLang);
    /**
     * TODO: send to the next screen
     */
  };

  return (
    <S.Container>
      <S.Content>
        <S.Circle />
        <S.TextContainer>
          <H1>{translate('LanguageScreen_SelectLanguage')}</H1>
        </S.TextContainer>
        <InputSelect arrowRight onClick={showList} text={selectedLangName} />
      </S.Content>

      <S.ButtonContent>
        <PrimaryButtonContained testID="continue-button" onPress={onContinue}>
          {translate('LanguageScreen_ContinueButton')}
        </PrimaryButtonContained>
      </S.ButtonContent>

      <BottomSheetSelection show={showBottomSheet} itemList={LANGUAGES_LIST} onPress={onLangPress} />
    </S.Container>
  );
};

export default LanguageScreen;
