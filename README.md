# FastBitcoins Dev Test

[FastBitcoins](https://fastbitcoins.com/) dev test in [React Native](https://reactnative.dev/) with [TypeScript](https://www.typescriptlang.org/) and [Expo Bare Workflow](https://docs.expo.dev/bare/exploring-bare-workflow/).

## Architecture Stack

- Design System
  - [React Native Paper](https://callstack.github.io/react-native-paper/)
  - [Styled Components](https://styled-components.com/)
  - Shared Theme (colors, sizes, etc)
- Fetching & Caching
  - [Axios](https://github.com/axios/axios)
  - [React-Query](https://react-query.tanstack.com/)
- Routes
  - [React Navigation](https://reactnavigation.org/)
- Forms
  - [React Hook Form](https://react-hook-form.com/)
  - [Yup](https://github.com/jquense/yup)
- Storage
  - [MMKV](https://github.com/Tencent/MMKV)
- Translations
  - [i18n](https://github.com/fnando/i18n-js)
  - Translation Files for all texts
- Animations
  - [React Native Reanimated](react-native-reanimated)
- Images
  - [React Native SVG](https://github.com/react-native-svg/react-native-svg)
  - [Fast Image](https://github.com/DylanVann/react-native-fast-image)
- Code Helpers (for re-render, comparison, etc)
  - [Lodash Debounce](https://www.npmjs.com/package/lodash.debounce)
  - [ImmerJS](https://github.com/immerjs/immer)
  - [React Fast Compare](https://github.com/FormidableLabs/react-fast-compare)
- Development Helpers
  - Unit Testing
    - [Jest](https://jestjs.io/)
    - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  - Lint
    - [ESLint](https://eslint.org/)
    - [Prettier](https://prettier.io/)
    - [ESLint React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - Git Hooks
    - [Husky](https://typicode.github.io/husky/#/)
    - [Lint Staged](https://github.com/okonet/lint-staged)
    - Commits with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Additionals
  - [i18n ISO Countries](i18n-iso-countries) to get ISO Countries Codes
  - [Reactotron](https://github.com/infinitered/reactotron) to inspect
    Network and Logs
  - Flag Images downloaded from [this repo](react-native-country-flag) - only the PNGs.
  - USA States JSON from [this repo file](https://usastatescode.com/state-array-json).

## Next Steps

- Add Icon
- Add Bootsplash
- Configure Release Build Modes:
  - Android:
    - Proguard
    - Version Management
  - iOS
    - Configure Certificates
    - Version Management
- Enabled [Hermes](https://reactnative.dev/docs/hermes/)
- Add [Fastlane](https://fastlane.tools/) for automatic deploys and builds
- Enable CI/CD: [GitHub Actions](https://github.com/features/actions) for example
- Pull Request Rules:
  - CODEOWNERS
  - Branch Rules
  - PR Template
