import { TouchableOpacity } from 'react-native';
import * as S from './styles';

type Props = {
  onPress: () => void;
};

const BackButtonIcon = () => (
  <S.IconContainer>
    <S.ArrowBackIcon />
  </S.IconContainer>
);

const BackButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <BackButtonIcon />
    </TouchableOpacity>
  );
};

export default BackButton;
