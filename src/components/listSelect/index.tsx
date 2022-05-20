import React, { memo, useState } from 'react';
import isEqual from 'react-fast-compare';
import { IListData, KeyValue } from '../../interfaces/listKeys';
import { TranslationKeys } from '../../utils/language/translations/translations.interface';
import BottomSheetSelection from '../bottomSheetSelection';
import InputSelect from '../inputSelect';

type Props = {
  placeholder: string;
  label?: TranslationKeys;
  listTitle?: TranslationKeys;
  items: IListData[];
  onSelectedItem: (selected: KeyValue) => void;
};

const ListSelect: React.FC<Props> = ({ placeholder, label, listTitle, items, onSelectedItem }) => {
  const [selectedItem, setSelectedItem] = useState<KeyValue>();
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const showList = () => setShowBottomSheet(true);

  const selectItem = (item: KeyValue) => {
    setShowBottomSheet(false);
    setSelectedItem(item);
    onSelectedItem(item);
  };

  return (
    <>
      <InputSelect onClick={showList} label={label ?? null} title={selectedItem?.value ?? placeholder} />
      <BottomSheetSelection title={listTitle} show={showBottomSheet} itemList={items} onPress={selectItem} />
    </>
  );
};

export default memo(ListSelect, (p, n) => isEqual(p.items, n.items));
