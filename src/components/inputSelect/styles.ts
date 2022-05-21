import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { ArrowDownSVG, ArrowRightSVG } from '../../assets/svgs/_index';

export const Container = styled(TouchableOpacity).attrs({ activeOpacity: 0.6 })`
  width: 100%;
`;

export const TextInputSelect = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.absolutes.gray};
  border-radius: 4px;
  height: 58px;
`;

export const TextContainer = styled.View`
  width: 95%;
`;

export const ArrowDownIcon = styled(ArrowDownSVG).attrs(() => ({
  width: 10,
  height: 16,
}))``;

export const ArrowRightIcon = styled(ArrowRightSVG).attrs(() => ({
  width: 8,
  height: 13,
}))``;
