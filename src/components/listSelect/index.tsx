import React, { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import { FlatList } from 'react-native';
import ListItem from '../listItem';

export interface IListData {
  key: string;
  value: string;
  icon?: React.ReactNode;
}

type Props = {
  listItems: IListData[];
  onPress: (selectedItem: string) => void;
};

const ListSelect: React.FC<Props> = ({ listItems, onPress }) => {
  const renderItem = useCallback(
    ({ item }) => <ListItem selectedItem={item.key} label={item.value} onPress={onPress} icon={item.icon} />,
    [onPress],
  );

  return <FlatList testID="list-select-flatlist" data={listItems} renderItem={renderItem} />;
};

export default memo(ListSelect, (p, n) => isEqual(p.listItems, n.listItems));
