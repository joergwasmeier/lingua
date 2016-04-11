import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Router, browserHistory  } from 'react-router';
import Layout from "./layout/Layout";

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

function errorLoading(e){
  console.log(e);
}

/*
var routeMap = (
  <Route path="/" component={getComp()} >
    <Route path="dashboard"  />
  </Route>
);
*/

var rootRoute = {
  path:"/",
  getComponent(location, cb) {
    System.import('./login/view/Login')
      .then(loadRoute(cb));
  }
};



var secondroutes = {
  component: Layout,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('./login/view/Login').then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: '/login/',
      getComponent(location, cb) {
        System.import('./login/view/Login').then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: '/dashboard/',
      getComponent(location, cb) {
        System.import('./dashboard/view/Dashboard').then(loadRoute(cb)).catch(errorLoading);
      }
    }
  ]
};


export function rend () {
    if (document.getElementById('container')) {
        ReactDOM.render(<Router routes={secondroutes} />, document.getElementById('container'));
    }
}
