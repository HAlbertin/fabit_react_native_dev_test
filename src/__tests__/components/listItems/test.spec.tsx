import React from 'react';
import ListItems from '../../../components/listItems';
import { renderWithProviders } from '../../../utils/test';

describe('<ListItems />', () => {
  const itemListMock = [
    {
      key: '1',
      value: 'teste',
    },
    {
      key: '2',
      value: 'bla_bla_bla',
    },
  ];

  it('should match snapshot', () => {
    const { toJSON } = renderWithProviders(<ListItems listItems={itemListMock} onPress={jest.fn()} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
