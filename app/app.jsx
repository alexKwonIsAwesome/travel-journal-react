var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Components

// Reducers

// Store
var store = createStore(rootReducer);

// Store Subscribe

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
  </Provider>,
  document.getElementById('app')
);
