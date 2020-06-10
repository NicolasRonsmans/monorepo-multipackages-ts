import React from 'react';

import { hello } from '@mmts/utils';

import Subheader from 'Subheader';

function Header(): JSX.Element {
  return (
    <header>
      <h1>Monorepos Multipackages - TS</h1>
      <p>{hello()}</p>
      <Subheader />
    </header>
  );
}

export default Header;
