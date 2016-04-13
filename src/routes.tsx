import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Router, browserHistory  } from 'react-router';
import Layout from "./layout/Layout";
import Login from "./login/view/Login";
import FabaCore from "fabalous-core/core/FabaCore";
import FabaMediator from "fabalous-core/core/FabaMediator";

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

function loadRouteDash(cb) {
  console.log(module);
  
  return (module) => {
    var med:FabaMediator = new module.mediator.default;
    FabaCore.addMediator(med);

    cb(null, module.view.default);
  }
}

function errorLoading(e){
  console.log(e);
}


var routeMap = (
  <Route path="/" component={Layout} >
    <Route path="/" component={Login}  />
  </Route>
);


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
        System.import('./dashboard/index').then(loadRouteDash(cb)).catch(errorLoading);
      }
    }
  ]
};


export function renderRoutes () {
    if (document.getElementById('container')) {
      ReactDOM.render(<Router routes={secondroutes} history={browserHistory} />, document.getElementById('container'));
    }
}
