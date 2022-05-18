import { theme } from '../../theme';
import { Typography } from '../fonts/styles';
import * as S from './styles';

type Props = {
  onClick: () => void;
  text: string;
};

const InputSelect: React.FC<Props> = ({ onClick, text }) => {
  return (
    <S.Container onPress={onClick}>
      <S.TextInputSelect>
        <Typography color={theme.colors.absolutes.gray}>{text}</Typography>
      </S.TextInputSelect>
    </S.Container>
  );
};

export default InputSelect;
