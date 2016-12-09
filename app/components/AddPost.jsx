var React = require('react');
var {connect} = require('react-redux');
var actions = require('action-posts');

export var AddPost = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var title = this.refs.postTitle.value;
    var content = this.refs.postContent.value;

    var {dispatch} = this.props;

    dispatch(actions.addPost(title, content));
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="postTitle" placeholder="Post title" />
          <input type="text" ref="postContent" placeholder="Post content" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(AddPost);
