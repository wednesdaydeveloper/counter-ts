import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Counter from './counter/Container';
import { Provider } from 'react-redux';
import store from './Store';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Counter />
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
