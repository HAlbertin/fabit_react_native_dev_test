import ConfigScreen from '.';
import { renderWithNavigator } from '../../utils/test';

describe('<ConfigScreen />', () => {
  it('should match snapshot', () => {
    const { toJSON } = renderWithNavigator(ConfigScreen);
    expect(toJSON()).toMatchSnapshot();
  });
});
