import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../listItem';

export interface IListData {
  key: string;
  value: string | number;
  icon?: React.ReactNode;
}

type Props = {
  listItems: IListData[];
  onPress: (selectedItem: string) => void;
};

const ListSelect: React.FC<Props> = ({ listItems, onPress }) => {
  const renderItem = ({ item }) => (
    <ListItem selectedItem={item.key} label={item.value} onPress={onPress} icon={item.icon} />
  );

  return <FlatList testID="list-select-flatlist" data={listItems} renderItem={renderItem} />;
};

export default ListSelect;
