import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import DimensionUtils from '../../utils/dimensions';

const SAFE_AREA = 20;

export const AnimatedContainer = styled(Animated.View)<{ safeArea: number }>`
  position: absolute;
  height: ${({ safeArea }) => DimensionUtils.deviceHeight - safeArea - SAFE_AREA}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.absolutes.white};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  elevation: 2;
  shadow-opacity: 0.2;
`;

export const Header = styled.View`
  width: 82px;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  margin: 10px auto;
  border-radius: 100px;
`;
