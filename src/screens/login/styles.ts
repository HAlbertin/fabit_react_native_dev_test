import { KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';

export const FormContainer = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: 32px;
  margin-bottom: 32px;
  justify-content: space-between;
`;

export const KeyboardAvoid = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
