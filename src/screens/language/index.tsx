import { NativeStackScreenProps } from '@react-navigation/native-stack';
import produce from 'immer';
import React, { useCallback, useMemo, useState } from 'react';
import { RouteStackParamList } from '..';
import ButtonContained from '../../components/buttons/buttonContained';
import H1 from '../../components/fonts/h1';
import ListSelect from '../../components/listSelect';
import { LANGUAGES_LIST } from '../../constants/language.constants';
import { IListData } from '../../interfaces/listKeys';
import { changeLanguage, DEFAULT_LANGUAGE, DEFAULT_TRANSLATION } from '../../utils/language';
import StorageUtils from '../../utils/storage';
import * as S from './styles';

const LanguageScreen: React.FC<NativeStackScreenProps<RouteStackParamList, 'LanguageScreen'>> = ({ navigation }) => {
  const [selectedLang, setSelectedLang] = useState<IListData>(DEFAULT_TRANSLATION);

  const onLangPress = useCallback((lang: IListData) => {
    setSelectedLang(produce(() => lang));
  }, []);

  const defaultLanguage = useMemo(() => LANGUAGES_LIST.find(l => l.key === DEFAULT_LANGUAGE).value, []);

  const onContinue = useCallback(() => {
    StorageUtils.setItem('USER_LANGUAGE', selectedLang.key);
    changeLanguage(selectedLang.key);
    navigation.navigate('LoginScreen');
  }, [navigation, selectedLang]);

  return (
    <S.Container>
      <S.Content>
        <S.Circle />
        <S.TextContainer>
          <H1 text="LanguageScreen_SelectLanguage" />
        </S.TextContainer>

        <ListSelect
          items={LANGUAGES_LIST}
          onSelectedItem={onLangPress}
          placeholder={selectedLang?.value ?? defaultLanguage}
        />
      </S.Content>

      <S.ButtonContent>
        <ButtonContained onPress={onContinue} text="LanguageScreen_ContinueButton" />
      </S.ButtonContent>
    </S.Container>
  );
};

export default LanguageScreen;
