import React from 'react';
// import { action } from '@storybook/addon-actions';

import Header from '@mmts/header';

export default {
  title: 'Header',
  component: Header,
};

export function Text(): JSX.Element {
  return <Header />;
}
