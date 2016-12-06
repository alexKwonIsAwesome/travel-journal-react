var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

// Components
var App = require('App');
var Intro = require('Intro');
var PostDetail = require('PostDetail');

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
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Intro}/>
      <Route path="post:postId" component={PostDetail}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
