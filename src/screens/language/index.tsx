import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useMemo, useState } from 'react';
import { RouteStackParamList } from '..';
import BottomSheetSelection from '../../components/bottomSheetSelection';
import ButtonContained from '../../components/buttons/buttonContained';
import H1 from '../../components/fonts/h1';
import InputSelect from '../../components/inputSelect';
import { LANGUAGES_LIST } from '../../constants/language.constants';
import { IListData } from '../../interfaces/listKeys';
import { changeLanguage, DEFAULT_LANGUAGE } from '../../utils/language';
import StorageUtils from '../../utils/storage';
import * as S from './styles';

const LanguageScreen: React.FC<NativeStackScreenProps<RouteStackParamList, 'LanguageScreen'>> = ({ navigation }) => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [selectedLang, setSelectedLang] = useState(DEFAULT_LANGUAGE);

  const onLangPress = (lang: IListData) => {
    setSelectedLang(lang.key);
    setShowBottomSheet(false);
  };

  const showList = () => setShowBottomSheet(true);
  const selectedLangName = useMemo(() => LANGUAGES_LIST.find(l => l.key === selectedLang).value, [selectedLang]);

  const onContinue = useCallback(() => {
    StorageUtils.setItem('USER_LANGUAGE', selectedLang);
    changeLanguage(selectedLang);
    navigation.navigate('LoginScreen');
  }, [navigation, selectedLang]);

  return (
    <S.Container>
      <S.Content>
        <S.Circle />
        <S.TextContainer>
          <H1 text="LanguageScreen_SelectLanguage" />
        </S.TextContainer>

        <InputSelect onClick={showList} title={selectedLangName} />
      </S.Content>

      <S.ButtonContent>
        <ButtonContained onPress={onContinue} text="LanguageScreen_ContinueButton" />
      </S.ButtonContent>

      <BottomSheetSelection show={showBottomSheet} itemList={LANGUAGES_LIST} onPress={onLangPress} />
    </S.Container>
  );
};

export default LanguageScreen;
