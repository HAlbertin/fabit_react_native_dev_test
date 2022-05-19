import React, { memo, useEffect } from 'react';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DimensionUtils from '../../utils/dimensions';
import * as S from './styles';

type Props = {
  visible: boolean;
  onDismiss?: () => void;
  children?: React.ReactNode;
};

const BottomSheet: React.FC<Props> = ({ visible, onDismiss, children }) => {
  const BOTTOMSHEET_ANIMATION_DURATION = 500;
  const { top } = useSafeAreaInsets();

  const bottom = useSharedValue(-DimensionUtils.deviceHeight);

  const bottomSheetAnimatedStyle = useAnimatedStyle(() => ({
    bottom: bottom.value,
  }));

  useEffect(() => {
    bottom.value = withTiming(visible ? 0 : -DimensionUtils.deviceHeight, { duration: BOTTOMSHEET_ANIMATION_DURATION });
  }, [bottom, visible]);

  return (
    <S.AnimatedContainer testID="bottomsheet-animated-container" safeArea={top} style={bottomSheetAnimatedStyle}>
      <S.Header testID="bottomsheet-animated-header" onTouchEnd={onDismiss} />
      {visible && children}
    </S.AnimatedContainer>
  );
};

export default memo(BottomSheet, (p, n) => p.visible === n.visible);
