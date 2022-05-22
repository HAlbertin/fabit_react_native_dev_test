import React, { memo, useCallback } from 'react';
import { IListData, KeyValue } from '../../interfaces/listKeys';
import { theme } from '../../theme';
import { TranslationKeys } from '../../utils/language/translations/translations.interface';
import Bottomsheet from '../bottomSheet';
import Typography from '../fonts/typography';
import ListItems from '../listItems';

type Props = {
  show: boolean;
  onPress: (item: KeyValue) => void;
  itemList: IListData[];
  title?: TranslationKeys;
};

const BottomSheetSelection: React.FC<Props> = ({ show, onPress, itemList, title }) => {
  const closeBottomSheet = useCallback(
    (selectedItem: KeyValue) => {
      onPress(selectedItem);
    },
    [onPress],
  );

  return (
    <Bottomsheet visible={show}>
      {title && (
        <Typography
          color={theme.colors.absolutes.black}
          needsTranslate
          testID="bottom-sheet-title"
          text={title}
          center
          bold
        />
      )}
      <ListItems listItems={itemList} onPress={closeBottomSheet} />
    </Bottomsheet>
  );
};

export default memo(BottomSheetSelection, (p, n) => p.show === n.show);
