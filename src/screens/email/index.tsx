import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { RouteStackParamList } from '..';
import { PrimaryButtonText } from '../../components/buttons/styles';
import DialogContent from '../../components/dialogContent';
import Typography from '../../components/fonts/typography';
import useVerifyEmail from '../../hooks/useVerifyEmail';
import { IMonitorResponse, MONITOR_ERROR_MESSAGES } from '../../services/api/interfaces/monitor.interfaces';
import ShowMessageUtils from '../../utils/showMessage';
import StorageUtils from '../../utils/storage';
import * as S from './styles';

const EmailScreen: React.FC<NativeStackScreenProps<RouteStackParamList, 'EmailScreen'>> = ({ navigation }) => {
  const goToLogin = useCallback(() => {
    StorageUtils.deleteItem('USER_SESSION_VERIFY');
    navigation.reset({ index: 0, routes: [{ name: 'LoginScreen' }] });
  }, [navigation]);

  const onSuccess = useCallback(
    (response: IMonitorResponse) => {
      if (response.expired) {
        goToLogin();
        return;
      }

      StorageUtils.setItem('USER_SECRET', response.secret);
      StorageUtils.deleteItem('USER_SESSION_VERIFY');

      navigation.reset({ index: 0, routes: [{ name: 'SuccessScreen' }] });
    },
    [goToLogin, navigation],
  );

  const onError = (error: Error) => ShowMessageUtils.showMessage(MONITOR_ERROR_MESSAGES[error.message]);

  useVerifyEmail(onSuccess, onError);

  return (
    <>
      <S.Container>
        <DialogContent
          icon={<S.VerifyEmailIcon />}
          title="EmailScreen_VerifyEmail_Title"
          subtitle="EmailScreen_VerifyEmail_Subtitle"
        />
      </S.Container>

      <S.ButtonContainer>
        <PrimaryButtonText testID="button-cancel" onPress={goToLogin}>
          <Typography testID="button-cancel-text" needsTranslate text={'EmailScreen_CancelButton'} />
        </PrimaryButtonText>
      </S.ButtonContainer>
    </>
  );
};

export default EmailScreen;
