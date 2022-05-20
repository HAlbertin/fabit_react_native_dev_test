import InputSelect from '../../../components/inputSelect';
import { renderWithProviders } from '../../../utils/test';

describe('<InputSelect />', () => {
  it('should match snapshot', () => {
    const { toJSON } = renderWithProviders(<InputSelect onClick={jest.fn()} title="inputMock" />);

    expect(toJSON()).toMatchSnapshot();
  });
});
