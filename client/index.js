import 'normalize.css';
import './styles';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

ReactDOM.render(<Routes />, document.getElementById('app'));
if (module.hot) {
  module.hot.accept();
}
