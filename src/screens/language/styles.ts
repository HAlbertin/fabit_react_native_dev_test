import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-left: 24px;
  padding-right: 24px;
`;

export const TextContainer = styled.View`
  margin-top: 80px;
  margin-bottom: 50px;
`;

export const Circle = styled.View`
  background-color: ${({ theme }) => theme.colors.absolutes.gray};
  width: 232px;
  height: 232px;
  border-radius: 150px;
`;
