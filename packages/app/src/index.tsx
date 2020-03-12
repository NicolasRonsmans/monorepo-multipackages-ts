import React from 'react';
import ReactDOM from 'react-dom';

import { hello } from '@mmts/utils';

function App() {
  return <p>{hello()}</p>;
}

ReactDOM.render(<App />, document.getElementById('root'));
