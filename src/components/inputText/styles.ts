import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

type IStyledTextInput = {
  ref: React.RefObject<typeof TextInput>;
};

export const InputText = styled(TextInput).attrs(({ ref }) => ({
  ref: ref,
}))<IStyledTextInput>`
  width: 100%;
  height: 62px;
  background-color: ${({ theme }) => theme.colors.absolutes.white};
  border: 1px solid ${({ theme }) => theme.colors.absolutes.black};
  border-radius: 4px;
  margin-top: 8px;
`;

export const InputContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
