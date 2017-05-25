import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import PortfolioPage from './components/Portfolio/PortfolioPage';
import ProjectPage from './components/Portfolio/ProjectPage';
import ServicesPage from './components/Services/ServicesPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="portfolio" component={PortfolioPage} />
    <Route path="project" component={PortfolioPage} />
    <Route path="project/:id" component={ProjectPage} />
    <Route path="services" component={ServicesPage} />
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
