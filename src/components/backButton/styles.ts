import styled from 'styled-components/native';
import { ArrowBackSVG } from '../../assets/svgs';

export const IconContainer = styled.View`
  justify-content: center;
  align-items: flex-start;
  flex: 1;
`;

export const ArrowBackIcon = styled(ArrowBackSVG).attrs(() => ({
  width: 16,
  height: 16,
}))``;
