import React, { memo, useCallback, useState } from 'react';
import isEqual from 'react-fast-compare';
import { FlatList } from 'react-native';
import { IListData, KeyValue } from '../../interfaces/listKeys';
import ListItem from './item';
import SearchInput from './searchInput';
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

  return (
    <S.Container>
      <SearchInput originalList={listItems} setFilteredList={setFilteredItems} />

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
