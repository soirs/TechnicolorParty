import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/app.scss'; // global style file

import Layout from './components/templates/LayoutTemplate';
import HomePage from './components/pages/HomePage';
import MovieDetails from './components/organisms/MovieDetails';
import FourOhFour from './components/pages/FourOhFour';

render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Switch> 
          <Route exact path='/' component={HomePage} />
          <Route path='/movie/:movieId' component={MovieDetails} />
          <Route component={FourOhFour} />
        </Switch>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// To debug the HMR
if (module.hot) {
  module.hot.accept(function (err) {
    console.log('An error occurred while accepting new version');
  });
}