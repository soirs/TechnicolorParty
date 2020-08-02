import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/app.scss'; // global style file
import store from './redux/store';
import { Provider } from 'react-redux';

import Layout from './components/templates/LayoutTemplate';
import HomePage from './components/pages/HomePage';
import MovieDetails from './components/organisms/MovieDetails';
import FourOhFour from './components/pages/FourOhFour';

render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/movie/:movieId' component={MovieDetails} />
            <Route component={FourOhFour} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

module.hot.accept();
