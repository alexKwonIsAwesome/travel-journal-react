var React = require('react');

import Header from 'Header';
import PostList from 'PostList';
import PostDetail from 'PostDetail';

var App = React.createClass({
  render: function () {
   return (
     <div className="expanded row">
      <Header />
      <div className="small-3 columns">
        <PostList />
      </div>
      <div className="small-9 columns">
        <PostDetail />
      </div>
     </div>
   );
  }
});

module.exports = App;
