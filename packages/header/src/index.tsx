import React from 'react';

import { hello } from '@mmts/utils';

function Header() {
  return (
    <header>
      <h1>Monorepos Multipackages - TypeScript</h1>
      <p>{hello()}</p>
    </header>
  );
}

export default Header;
