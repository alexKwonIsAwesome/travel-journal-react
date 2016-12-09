var React = require('react');
var {connect} = require('react-redux');

import PostDetail from 'PostDetail';

export var PostDetailContainer = React.createClass({
  render: function () {
   return (
     <div>
      <PostDetail id={this.props.params.postId}/>
     </div>
   );
  }
});

export default connect(
  (state) => {
    return state
  }
)(PostDetailContainer);
