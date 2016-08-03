import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, browserHistory, hashHistory} from "react-router";
import Layout from "./../layout/Layout";
import FabaCore from "fabalous-core/core/FabaCore";
import FabaMediator from "fabalous-core/core/FabaMediator";
import {AppModel} from "./AppModel"; // you need to install this package

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

function loadRouteDash(cb, view?:string) {
  return (module) => {
    var med:FabaMediator = new module.mediator;
    FabaCore.addMediator(med);

    // dispatch INIT event
    if (module.initEvent){
      new module.initEvent().dispatch();
    }

    if (view){
      cb(null, module[view]);
    } else {
      cb(null, function(){
        return React.createElement(module.view, {"model":AppModel.getInstance()[module.storeName]});
      });
    }
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
      },
      routerParams:{
        "test":"test"
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

declare var module:any;

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