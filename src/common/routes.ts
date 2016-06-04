import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, browserHistory, hashHistory} from "react-router";
import Layout from "./../layout/Layout";
import FabaCore from "fabalous-core/core/FabaCore";
import FabaMediator from "fabalous-core/core/FabaMediator"; // you need to install this package

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

var secondroutes = {
  path: '/',
  component: Layout,
  indexRoute: { onEnter: (nextState, replace) => {
    //location.assign("/login/")
    browserHistory.push('#/login/')
  }
  },
  childRoutes: [
    {
      path: '/login/',
      getComponent(location, cb) {
        System.import('./../login/index').then(loadRouteDash(cb)).catch(errorLoading);
      }
    },
    {
      path: '/dashboard/',
      getComponent(location, cb) {
        System.import('./../dashboard/index').then(loadRouteDash(cb)).catch(errorLoading);
      }
    },
    {
      path: '*',
      getComponent(location, cb) {
        System.import('./../login/index').then(loadRouteDash(cb)).catch(errorLoading);
      }
    }
  ]
};


export function renderRoutes () {
  if (document.getElementById('container')) {
    var routes = React.createElement(Router, {routes: secondroutes, history:hashHistory});

    var routes = React.createElement(Router, {routes: secondroutes, history:hashHistory});
    ReactDOM.render(routes, document.getElementById('container'));
  }
}

/*
 {
 path: '/course/',
 getComponent(location, cb) {
 System.import('./../course/index').then(loadRouteDash(cb)).catch(errorLoading);
 }
 },
 {
 path: '/courses-overview/',
 getComponent(location, cb) {
 System.import('./../courses-overview/index').then(loadRouteDash(cb)).catch(errorLoading);
 }
 },

 */