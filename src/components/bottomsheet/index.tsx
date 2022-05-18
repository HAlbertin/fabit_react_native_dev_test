import React, { memo, useEffect } from 'react';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import DimensionUtils from '../../utils/dimensions';
import * as S from './styles';

export interface BottomSheetDialogProps {
  visible?: boolean;
  onDismiss?: () => void;
  children?: React.ReactNode;
}

const BottomSheetDialog: React.FC<BottomSheetDialogProps> = ({ visible, onDismiss, children }) => {
  const BOTTOMSHEET_ANIMATION_DURATION = 500;
  const bottom = useSharedValue(-DimensionUtils.deviceHeight);

  const bottomSheetAnimatedStyle = useAnimatedStyle(() => ({
    bottom: bottom.value,
  }));

  useEffect(() => {
    bottom.value = withTiming(visible ? 0 : -DimensionUtils.deviceHeight, { duration: BOTTOMSHEET_ANIMATION_DURATION });
  }, [bottom, visible]);

  return (
    <S.AnimatedContainer style={bottomSheetAnimatedStyle} testID="bottomsheet-drag-dismiss">
      <S.Header onTouchEnd={onDismiss} />
      {children}
    </S.AnimatedContainer>
  );
};

export default memo(BottomSheetDialog, (p, n) => p.visible === n.visible);
