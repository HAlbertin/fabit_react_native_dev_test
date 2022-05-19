/// <reference types="@welldone-software/why-did-you-render" />

import React from 'react';

// eslint-disable-next-line no-undef
if (__DEV__) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
