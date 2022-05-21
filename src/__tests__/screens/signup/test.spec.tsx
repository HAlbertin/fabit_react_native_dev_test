import { act, fireEvent } from '@testing-library/react-native';
import SignupScreen from '../../../screens/signup';
import { renderWithNavigator } from '../../../utils/test';

const mockUSA_COUNTRY_CODEGetter = jest.fn();
jest.mock('../../../constants/usaStates.constants', () => ({
  get USA_COUNTRY_CODE() {
    return mockUSA_COUNTRY_CODEGetter();
  },
  get US_STATES() {
    return [
      { value: 'ALABAMA', key: 'AL' },
      { value: 'ALASKA', key: 'AK' },
    ];
  },
}));

describe('<SignupScreen />', () => {
  it('should match snapshot', () => {
    const { toJSON } = renderWithNavigator(SignupScreen);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should select a country', async () => {
    const { queryAllByTestId, getByTestId, getByText } = renderWithNavigator(SignupScreen);

    const input = queryAllByTestId('input-select-container')[0];
    await act(async () => {
      await fireEvent.press(input);
    });

    const selectedCountry = getByTestId('list-item-AR');
    await act(async () => {
      await fireEvent.press(selectedCountry);
    });

    const arLabel = getByText('Argentina');

    expect(arLabel).toBeTruthy();
  });

  it('should select a state when US is selected', async () => {
    mockUSA_COUNTRY_CODEGetter.mockReturnValue('AR');
    const { queryAllByTestId, getByTestId, getByText } = renderWithNavigator(SignupScreen);

    const input = queryAllByTestId('input-select-container')[0];
    await act(async () => {
      await fireEvent.press(input);
    });

    const selectedCountry = getByTestId('list-item-AR');
    await act(async () => {
      await fireEvent.press(selectedCountry);
    });

    const arLabel = getByText('Argentina');
    expect(arLabel).toBeTruthy();

    const selectedState = queryAllByTestId('input-select-container')[1];
    await act(async () => {
      await fireEvent.press(selectedState);
    });

    const stateLabel = getByText('ALABAMA');
    expect(stateLabel).toBeTruthy();
  });
});
