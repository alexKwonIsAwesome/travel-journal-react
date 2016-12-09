var React = require('react');
var {Link} = require('react-router');
var {connect} = require('react-redux');

export var PostList = React.createClass({
  renderPosts: function (posts) {
    return posts.map((post) => {
      return (
        <li key={post.id}><Link to={"post/" + post.id}>{post.title}</Link></li>
      );
    });
  },
  render: function () {
    return (
      <ul>
        {this.renderPosts(this.props.posts)}
      </ul>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(PostList);
