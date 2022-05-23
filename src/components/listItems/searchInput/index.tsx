import debounce from 'lodash.debounce';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import { TextInput } from 'react-native-paper';
import { IListData } from '../../../interfaces/listKeys';
import { translate } from '../../../utils/language';
import InputText from '../../inputText';

type Props = {
  setFilteredList: React.Dispatch<React.SetStateAction<IListData[]>>;
  originalList: IListData[];
};

const SearchInput: React.FC<Props> = ({ setFilteredList, originalList }) => {
  const filterList = useCallback(
    (filterText: string) => {
      const filtered = originalList.filter(i => i.value.toLowerCase().includes(filterText.toLowerCase()));
      setFilteredList(filtered);
    },
    [originalList, setFilteredList],
  );

  const debouncedChangeHandler = useMemo(() => debounce(filterList, 300), [filterList]);

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

  return (
    <InputText
      leftIcon={<TextInput.Icon name="magnify" />}
      placeholder={translate('SearchInputComponent_Placeholder')}
      onChangeText={debouncedChangeHandler}
      testID="search-input"
    />
  );
};

export default memo(SearchInput, (p, n) => isEqual(p.originalList, n.originalList));
