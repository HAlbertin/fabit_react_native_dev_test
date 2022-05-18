import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity).attrs({ activeOpacity: 0.6 })`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const TextInputSelect = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.absolutes.gray};
  border-radius: 4px;
  position: relative;
  padding: 16px;
`;
