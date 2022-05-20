import React, { memo } from 'react';
import { View } from 'react-native';
import { Divider, List } from 'react-native-paper';

type Props = {
  onPress: (item: string) => void;
  selectedItem: string;
  label: string;
  icon?: React.ReactNode;
};

const ListItem: React.FC<Props> = ({ onPress, selectedItem, label, icon }) => {
  const onListItemPress = () => onPress(selectedItem);

  return (
    <View>
      <List.Item
        testID={`list-item-${selectedItem}`}
        onPress={onListItemPress}
        title={label}
        left={() => icon ?? null}
      />
      <Divider />
    </View>
  );
};

export default memo(ListItem, (p, n) => p.selectedItem === n.selectedItem);
