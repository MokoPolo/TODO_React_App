import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import TodoPage from './components/todo/TodoPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TodoPage} />
    <Route path="/todo" component={TodoPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="*" component={HomePage} />
  </Route>
);
