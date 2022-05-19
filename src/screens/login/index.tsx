import { Text } from 'react-native';
import Layout from '../../components/layout';
import { translate } from '../../utils/language';
import * as S from './styles';

const LoginScreen: React.FC = () => {
  return (
    <Layout headerTitle="LoginScreen_HeaderTitle">
      <S.Container>
        <Text>{translate('LoginScreen_Email')}</Text>
      </S.Container>
    </Layout>
  );
};

export default LoginScreen;
