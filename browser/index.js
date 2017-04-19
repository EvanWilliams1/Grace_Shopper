import React from 'react';
import ReactDOM from 'react-dom';

import {
  IndexRoute,
  Router,
  Route,
  browserHistory
} from 'react-router';

import store from '../redux/store';
import Home from './Home';
import FoodRecord from './FoodRecord';
import { Provider } from 'react-redux';

import Main from './Main';

const app = (
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ Main }>
        <IndexRoute component={ Home } />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));

