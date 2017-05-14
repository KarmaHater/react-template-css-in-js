import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import store from './store/store.js';
import HomePage from './pages/home-page';

import { createRenderer } from 'fela'
import { Provider as FelaProvider } from 'react-fela'
const renderer = createRenderer()
// The provider will automatically renderer the styles
// into the mountNode on componentWillMount
const mountNode = document.getElementById('stylesheet')

const routes = <Route>
    <Route path="/" component={HomePage}/>
</Route>;

let reactElement = document.getElementById('react');

render(
    <FelaProvider renderer={renderer} mountNode={mountNode}>
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>
    </FelaProvider>
    ,
    reactElement
);
