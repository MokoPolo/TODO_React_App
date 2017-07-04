import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import TodoPage from './components/todo/TodoPage';
import GroceriesPage from './components/grocery/GroceriesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/todo" component={TodoPage} />
    <Route path="/grocery" component={GroceriesPage} />
    <Route path="/about" component={AboutPage} />
  </Route>
);

