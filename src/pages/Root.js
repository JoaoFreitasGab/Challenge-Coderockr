import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,

} from 'react-router-dom';
import PagesIndex from './index';
import PageSinglePost from './singlePost'



const Root = () => {

  return (

    <Router>
      <Switch>
        <Route path="/" exact component={PagesIndex} />
        <Route path="/posts/:postId"component={PageSinglePost}  >
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;

