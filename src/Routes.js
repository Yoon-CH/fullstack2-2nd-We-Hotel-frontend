import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Detail from './pages/Detail/Detail';
import List from './pages/List/List';
import Main from './pages/Main/Main';
import MyDaily from './pages/MyDaily/MyDaily';
import Review from './pages/Review/Review';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/list" component={List} />
        <Route exact path="/mydaily" component={MyDaily} />
        <Route exact path="/review" component={Review} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
