import ListItems from '../../../components/listItems';
import { renderWithProviders } from '../../../utils/test';

describe('<ListSelect />', () => {
  const itemListMock = [
    {
      key: '1',
      value: 'teste',
    },
  ];

  it('should match snapshot', () => {
    const { toJSON } = renderWithProviders(<ListItems listItems={itemListMock} onPress={jest.fn()} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render list items', () => {
    const { getByTestId } = renderWithProviders(<ListItems listItems={itemListMock} onPress={jest.fn()} />);

    const renderedItem = getByTestId('list-item-1');

    expect(renderedItem).toBeTruthy();
  });
});
