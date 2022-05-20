import { act, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../../../screens/login';
import en from '../../../utils/language/translations/en';
import { renderWithNavigator } from '../../../utils/test';

describe('<LoginScreen />', () => {
  const INVALID_EMAIL = 'aaaaa';
  const EMPTY_EMAIL = '';
  const VALID_EMAIL = 'teste@teste.com';

  it('should match snapshot', () => {
    const { toJSON } = renderWithNavigator(LoginScreen);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should show email errors for input', async () => {
    const { getByTestId, getByText } = renderWithNavigator(LoginScreen);

    const emailInput = getByTestId('email-input');

    await act(async () => {
      await fireEvent.changeText(emailInput, INVALID_EMAIL);
    });

    const invalidLabel = getByText(en.LoginScreen_EmailInvalid);
    expect(invalidLabel).toBeTruthy();

    await act(async () => {
      await fireEvent.changeText(emailInput, EMPTY_EMAIL);
    });

    const requiredLabel = getByText(en.LoginScreen_EmailRequired);
    expect(requiredLabel).toBeTruthy();
  });

  it('should enable submit button', async () => {
    const { getByTestId, queryByTestId } = renderWithNavigator(LoginScreen);

    const emailInput = getByTestId('email-input');

    await act(async () => {
      await fireEvent.changeText(emailInput, VALID_EMAIL);
    });

    const invalidLabel = queryByTestId(en.LoginScreen_EmailInvalid);
    const requiredLabel = queryByTestId(en.LoginScreen_EmailRequired);

    expect(invalidLabel).toBeFalsy();
    expect(requiredLabel).toBeFalsy();
  });
});
