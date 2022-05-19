import { View } from 'react-native';
import BottomSheet from '../../../components/bottomSheet';
import { renderWithProviders } from '../../../utils/test';

describe('<BottomSheet />', () => {
  it('should match snapshot', () => {
    const { toJSON } = renderWithProviders(<BottomSheet visible={true} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render children', () => {
    const { getByTestId } = renderWithProviders(
      <BottomSheet visible={true}>
        <View testID="view-mock">{'mock'}</View>
      </BottomSheet>,
    );

    const viewMock = getByTestId('view-mock');

    expect(viewMock).toBeTruthy();
  });

  it('should NOT render children', () => {
    const { queryByTestId } = renderWithProviders(
      <BottomSheet visible={false}>
        <View testID="view-mock">{'mock'}</View>
      </BottomSheet>,
    );

    const viewMock = queryByTestId('view-mock');

    expect(viewMock).toBeFalsy();
  });
});
