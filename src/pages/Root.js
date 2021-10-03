import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PagesIndex from './index';
import PageSinglePost from './singlePost'

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PagesIndex} />
        <Route path="/posts/:id" component={PageSinglePost} />
      </Switch>
    </Router>
  );
};

export default Root;

