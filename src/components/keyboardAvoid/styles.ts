import { KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';

export const KeyboardAvoid = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
