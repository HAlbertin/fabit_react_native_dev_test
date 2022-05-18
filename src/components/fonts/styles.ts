import styled from 'styled-components/native';

export const H1 = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 32px;
`;

export const Typography = styled.Text<{ color?: string; fontSize?: number }>`
  color: ${({ color, theme }) => color ?? theme.colors.primary};
  font-size: ${({ fontSize }) => fontSize ?? 16}px;
`;
