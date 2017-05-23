import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import PortfolioPage from './components/Portfolio/PortfolioPage';

export default (
  <Route path="/" component={App}>
  <IndexRoute component={HomePage}/>
  <Route path="portfolio" component={PortfolioPage}/>
  </Route>
);
