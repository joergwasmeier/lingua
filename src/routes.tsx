import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Router, browserHistory  } from 'react-router';
import Login from "./login/view/Login";


var routeMap = (
  <Route path="/" component={Login} >
    <Route path="dashboard"  />
  </Route>
);

export function rend () {
    if (document.getElementById('container')) {
        ReactDOM.render(<Router>{routeMap}</Router>, document.getElementById('container'));
    }
}
