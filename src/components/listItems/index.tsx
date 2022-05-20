import debounce from 'lodash.debounce';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import isEqual from 'react-fast-compare';
import { FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import { IListData, KeyValue } from '../../interfaces/listKeys';
import InputText from '../inputText';
import ListItem from './item';
import * as S from './styles';

type Props = {
  listItems: IListData[];
  onPress: (selectedItem: KeyValue) => void;
};

const ListItems: React.FC<Props> = ({ listItems, onPress }) => {
  const [filteredItems, setFilteredItems] = useState(listItems);

  const renderItem = useCallback(
    ({ item }) => {
      return <ListItem selectedItem={item.key} label={item.value} onPress={() => onPress(item)} icon={item.icon} />;
    },
    [onPress],
  );

  const filterList = useCallback(
    (filterText: string) => {
      setFilteredItems(listItems.filter(i => i.value.toLowerCase().includes(filterText.toLowerCase())));
    },
    [listItems],
  );

  const debouncedChangeHandler = useMemo(() => debounce(filterList, 300), [filterList]);

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

  return (
    <S.Container>
      <InputText
        leftIcon={<TextInput.Icon name="magnify" />}
        placeholder={'Search'}
        onChangeText={debouncedChangeHandler}
      />

      <FlatList
        removeClippedSubviews={true}
        testID="list-select-flatlist"
        data={filteredItems}
        renderItem={renderItem}
      />
    </S.Container>
  );
};

export default memo(ListItems, (p, n) => isEqual(p.listItems, n.listItems));
