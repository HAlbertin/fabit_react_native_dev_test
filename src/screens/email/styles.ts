import styled from 'styled-components/native';
import { VerifyEmailSVG } from '../../assets/svgs/_index';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const VerifyEmailIcon = styled(VerifyEmailSVG).attrs(() => ({
  width: 96,
  height: 93,
}))``;

export const ButtonContainer = styled.View`
  justify-content: flex-end;
  margin-bottom: 32px;
`;
