import React, { memo } from 'react';
import BottomSheet from '../bottomSheet';

import ListSelect, { IListData } from '../listSelect';

type Props = {
  show: boolean;
  onPress: (item: string) => void;
  itemList: IListData[];
};

const BottomSheetSelection: React.FC<Props> = ({ show, onPress, itemList }) => {
  const closeBottomSheet = (selectedItem: string) => {
    onPress(selectedItem);
  };

  return (
    <BottomSheet visible={show}>
      <ListSelect listItems={itemList} onPress={closeBottomSheet} />
    </BottomSheet>
  );
};

export default memo(BottomSheetSelection, (p, n) => p.show === n.show);
