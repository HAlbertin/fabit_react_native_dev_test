import styled from 'styled-components/native';

export const StyledH1 = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 32px;
`;

type StyledTypographyProps = { center?: boolean; color?: string; fontSize?: number; bold?: boolean };
export const StyledTypography = styled.Text<StyledTypographyProps>`
  color: ${({ color, theme }) => color ?? theme.colors.primary};
  font-size: ${({ fontSize }) => fontSize ?? 16}px;

  ${({ center }) =>
    center &&
    `
      text-align: center;   
    `};

  ${({ bold }) =>
    bold &&
    `
      font-weight: bold;   
    `};
`;
