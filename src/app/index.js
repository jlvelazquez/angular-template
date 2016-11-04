'use strict';

// Styles

import reset from './styles/reset.styl';
import layout from './styles/layout.styl';

// Angular

import angular from 'angular';
import router from 'angular-ui-router';

// Redux

import ngRedux from 'ng-redux';
import reducer from './store/index';
import thunk from 'redux-thunk';

let middleware = [thunk];

// Redux devtools

import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Monitor extends Component {
    render() {
        return (
            <div>
                <DebugPanel top right bottom>
                    <DevTools store={ this.props.store } monitor={ LogMonitor } />
                </DebugPanel>
            </div>
        );
    }
}

import Home from './states/home';

import filters from './filters';
import directives from './directives';
import components from './components';

const providers = ['$stateProvider', '$urlRouterProvider', '$ngReduxProvider'];

angular
    .module('myApp', [router, filters, directives, components, ngRedux])
    .config([...providers, (state, router, redux) => {

        state
            .state('home', Home);

        router.otherwise('/');

        redux.createStoreWith(reducer, middleware, [devTools()]);
    }])
    .run(($ngRedux) => {

        //ReactDOM.render(<Monitor store={ $ngRedux }/>, document.getElementById('devTools'));
    });
