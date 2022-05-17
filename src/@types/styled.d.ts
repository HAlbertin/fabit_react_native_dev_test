import 'styled-components';
import { Theme } from '../theme';

declare module 'styled-components/native' {
  /**
   * Disables eslint in this line to override theme DefaultTheme interface;
   * Now, we can have autocomplete in styled components files when using theme
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
