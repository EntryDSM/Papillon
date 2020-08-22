import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Login from 'page/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={() => <Login />} />
        <Route exact path="/" component={() => <></>} />
        <Route exact path="/applicant" component={() => <></>} />
        <Route exact path="/admission" component={() => <></>} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
