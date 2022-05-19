import { act, fireEvent } from '@testing-library/react-native';
import LanguageScreen from '../../../screens/language';
import { renderWithNavigator } from '../../../utils/test';

describe('<LanguageScreen />', () => {
  it('should match snapshot', () => {
    const { toJSON } = renderWithNavigator(LanguageScreen);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should select a different language', async () => {
    const { getByTestId, getByText } = renderWithNavigator(LanguageScreen);

    const englishLabel = getByText('English');

    expect(englishLabel).toBeTruthy();

    const input = getByTestId('input-select-container');
    await act(async () => {
      await fireEvent.press(input);
    });

    const selectedLang = getByTestId('list-item-pt');
    await act(async () => {
      await fireEvent.press(selectedLang);
    });

    const ptLabel = getByText('Portuguese');

    expect(ptLabel).toBeTruthy();
  });
});
