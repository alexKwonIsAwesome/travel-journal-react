var React = require('react');
var {connect} = require('react-redux');

var PostDetail = React.createClass({
  fetchPost: function (posts, id) {
    var newPosts =  posts.filter((post) => {
      return (post.id === id);
    });

    return newPosts[0];
  },
  render: function () {
    var posts = this.props.posts;
    var id = this.props.id;
    
    var post = this.fetchPost(posts, id);
    return (
      <div>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(PostDetail);
