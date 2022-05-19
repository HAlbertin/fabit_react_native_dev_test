import ListItem from '../../../components/listItem';
import { renderWithProviders } from '../../../utils/test';

describe('<ListItem />', () => {
  it('should match snapshot', () => {
    const { toJSON } = renderWithProviders(
      <ListItem label="labelMock" onPress={jest.fn()} selectedItem="selectedItemMock" />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
