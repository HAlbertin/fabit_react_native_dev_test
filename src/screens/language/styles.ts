import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
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

export const Content = styled.View`
  padding: 0 24px;
  align-items: center;
  justify-content: center;
`;

export const ButtonContent = styled.View`
  padding: 0 28px;
  width: 100%;
  margin: 16px;
`;
