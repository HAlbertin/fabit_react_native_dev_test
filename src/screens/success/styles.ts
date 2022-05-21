import styled from 'styled-components/native';
import { SuccessEmailSVG } from '../../assets/svgs/_index';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SuccessEmailIcon = styled(SuccessEmailSVG).attrs(() => ({
  width: 96,
  height: 96,
}))``;
