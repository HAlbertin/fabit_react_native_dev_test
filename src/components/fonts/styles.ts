import styled from 'styled-components/native';

export const StyledH1 = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 32px;
`;

export const StyledTypography = styled.Text<{ color?: string; fontSize?: number }>`
  color: ${({ color, theme }) => color ?? theme.colors.primary};
  font-size: ${({ fontSize }) => fontSize ?? 16}px;
`;
