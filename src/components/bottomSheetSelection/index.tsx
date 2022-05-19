import React, { memo } from 'react';
import Bottomsheet from '../bottomSheet';
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
    <Bottomsheet visible={show}>
      <ListSelect listItems={itemList} onPress={closeBottomSheet} />
    </Bottomsheet>
  );
};

export default memo(BottomSheetSelection, (p, n) => p.show === n.show);
