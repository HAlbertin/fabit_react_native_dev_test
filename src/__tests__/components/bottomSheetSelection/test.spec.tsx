import BottomSheetSelection from '../../../components/bottomSheetSelection';
import { renderWithProviders } from '../../../utils/test';

describe('<BottomSheetSelection />', () => {
  const itemListMock = [
    {
      key: '1',
      value: 'teste',
    },
  ];

  it('should match snapshot', () => {
    const { toJSON } = renderWithProviders(
      <BottomSheetSelection onPress={jest.fn()} show={true} itemList={itemListMock} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
