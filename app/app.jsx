var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

// Components
var App = require('App');

// Reducers

// Store
var {createStore} = require('redux');
var store = createStore(() => {});

// Store Subscribe

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
