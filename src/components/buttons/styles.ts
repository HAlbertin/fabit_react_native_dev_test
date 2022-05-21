import { Button } from 'react-native-paper';
import styled from 'styled-components/native';

export const PrimaryButtonContained = styled(Button).attrs(({ theme, disabled }) => ({
  mode: 'contained',
  uppercase: false,
  labelStyle: { color: theme.colors.secondary, fontWeight: 'bold' },
  contentStyle: {
    height: 64,
    backgroundColor: disabled ? theme.colors.disabled : theme.colors.primary,
  },
}))`
  border-radius: 0;
`;

export const PrimaryButtonText = styled(Button).attrs(({ theme }) => ({
  mode: 'text',
  uppercase: false,
  labelStyle: { color: theme.colors.secondary, fontWeight: 'bold' },
  contentStyle: {
    height: 64,
  },
}))`
  border-radius: 0;
`;
