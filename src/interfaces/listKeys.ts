export type KeyValue = {
  key: string;
  value: string;
};

export interface IListData extends KeyValue {
  icon?: React.ReactNode;
}
