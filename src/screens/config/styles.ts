import styled from 'styled-components/native';
import { ArrowDownSVG } from '../../assets/svgs';

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ArrowDownIcon = styled(ArrowDownSVG).attrs(() => ({
  width: 20,
  height: 20,
}))``;
