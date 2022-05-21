import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RouteStackParamList } from '..';
import { PrimaryButtonText } from '../../components/buttons/styles';
import DialogContent from '../../components/dialogContent';
import Typography from '../../components/fonts/typography';
import useVerifyEmail from '../../hooks/useVerifyEmail';
import {
  IMonitorResponse,
  MonitorErrorResponse,
  MONITOR_ERROR_MESSAGES,
} from '../../services/api/interfaces/monitor.interfaces';
import StorageUtils from '../../utils/storage';
import * as S from './styles';

const EmailScreen: React.FC<NativeStackScreenProps<RouteStackParamList, 'EmailScreen'>> = ({ navigation }) => {
  const goToLogin = () => {
    StorageUtils.deleteItem('USER_SESSION');
    navigation.reset({ index: 0, routes: [{ name: 'LoginScreen' }] });
  };

  const onSuccess = (response: IMonitorResponse) => {
    if (response.expired) {
      goToLogin();
      return;
    }

    navigation.reset({ index: 0, routes: [{ name: 'SuccessScreen' }] });
  };

  const onError = (error: MonitorErrorResponse) => {
    /**
     * TODO: show error to the user
     */
    console.error(MONITOR_ERROR_MESSAGES[error]);
  };

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
