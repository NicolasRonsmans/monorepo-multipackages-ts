import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from '@mmts/header';
import { hello } from '@mmts/utils';

function App() {
  return (
    <>
      <Header />
      <p>{hello()}</p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
