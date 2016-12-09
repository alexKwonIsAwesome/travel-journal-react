var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');
var {createStore, combineReducers} = require('redux');

// Components
var App = require('App');
var Intro = require('Intro');
import PostDetailContainer from 'PostDetailContainer';
import AddPost from 'AddPost';

var About = require('About');

// Reducers
var {postsReducer} = require('reducer-posts');

var rootReducer = combineReducers({
  posts: postsReducer
});

// Store
var store = createStore(rootReducer);

// Store Subscribe
store.subscribe(() => {
  var state = store.getState();
  console.log('Hahayaya it\'s a new state', state);
});

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store ={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="post/new" component={AddPost}/>
        <Route path="post/:postId" component={PostDetailContainer}/>
        <Route path="about" component={About}/>
        <IndexRoute component={Intro}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
