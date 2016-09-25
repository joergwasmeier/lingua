import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, browserHistory, hashHistory} from "react-router";
import Layout from "./../layout/Layout";
import FabaCore from "@fabalous/core/FabaCore";

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

function loadRouteDash(cb, view?:string) {
  return (module) => {
    FabaCore.addMediator(module.mediator);

    new module.initEvent(view).dispatch((event)=>{
      cb(null, ()=>{return event.view});
    });

  }
}

function errorLoading(e) {
  throw e;
}

var secondroutes = {
  path: '/',
  component: Layout,
  indexRoute: { onEnter: (nextState, replace) => {
    //location.assign("/login/")
    browserHistory.push('#/login/')
  }},

  childRoutes: [
    {
      path: '/login/',

      getComponent(location, cb) {
        System.import('./../account/index').then(loadRouteDash(cb)).catch(errorLoading);
      }
    },
    {
      path: '/signUp/',
      getComponent(location, cb) {
        System.import('./../account/index').then(loadRouteDash(cb, "signUp")).catch(errorLoading);
      }
    },
    {
      path: '/forgotpass/',
      getComponent(location, cb) {
        System.import('./../account/index').then(loadRouteDash(cb, "forgotPass")).catch(errorLoading);
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
        System.import('./../account/index').then(loadRouteDash(cb)).catch(errorLoading);
      }
    }
  ]
};


export function renderRoutes() {
  if (document.getElementById('container')) {
    var routes = React.createElement(Router, {routes: secondroutes, history: hashHistory});
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