import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../app';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import TodoPage from './todo/TodoPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/todo" component={TodoPage} />
    <Route path="/about" component={AboutPage} />

  </Route>
);
