import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Login from './pages/Login';
import { Grommet } from 'grommet';

const theme = {
  global: {
    colors: {
      'light-2': '#f5f5f5',
      text: {
        light: 'rgba(0, 0, 0, 0.87)'
      }
    },
    edgeSize: {
      small: '14px'
    },
    elevation: {
      light: {
        medium:
          '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'
      }
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px'
    }
  }
};

const Index = () => (
  <Grommet theme={theme}>
    <Login />
  </Grommet>
);

ReactDOM.render(<Index />, document.getElementById('container'));
