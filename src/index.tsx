import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Counter from './counter/Container';
import { Provider } from 'react-redux';
import store from './Store';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Counter />
      </MuiThemeProvider>    
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
