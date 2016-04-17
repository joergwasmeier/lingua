import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, browserHistory, hashHistory  } from 'react-router';
import BrowserHistory from 'react-router/lib/History'
import { createHistory } from 'history'; // you need to install this package

import Layout from "./layout/Layout";
import Login from "./login/view/Login";
import FabaCore from "fabalous-core/core/FabaCore";
import FabaMediator from "fabalous-core/core/FabaMediator";
let history = createHistory();
function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

function loadRouteDash(cb) {
  return (module) => {
    var med:FabaMediator = new module.mediator.default;
    FabaCore.addMediator(med);

    cb(null, module.view.default);
  }
}

function errorLoading(e){
  console.log(e);
}

var rootRoute = {
  path:"/",
  getComponent(location, cb) {
    System.import('./login/view/Login')
      .then(loadRoute(cb));
  }
};



var secondroutes = {
  path: '/',
  component: Layout,
  indexRoute: { onEnter: (nextState, replace) => {
      location.assign("#/login/")
    }
  },
  childRoutes: [
    {
      path: '/login/',
      getComponent(location, cb) {
        System.import('./login/view/Login').then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: '/dashboard/',
      getComponent(location, cb) {
        System.import('./dashboard/index').then(loadRouteDash(cb)).catch(errorLoading);
      }
    },
    {
      path: '*',
      getComponent(location, cb) {
        System.import('./login/view/Login').then(loadRoute(cb)).catch(errorLoading);
      }
    }
  ]
};


export function renderRoutes () {
    if (document.getElementById('container')) {
      var routes = React.createElement(Router, {routes: secondroutes, history:history});

      var routes = React.createElement(Router, {routes: secondroutes});
      ReactDOM.render(routes, document.getElementById('container'));
    }
}