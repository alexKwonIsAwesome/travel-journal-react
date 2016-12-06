var React = require('react');
var {Link} = require('react-router');

var PostList = React.createClass({
  renderPosts: function (posts) {
    return posts.map((post) => {
      return (
        <li key={post.id}><Link to={"/post/" + post.id}>{post.title}</Link></li>
      );
    });
  },
  render: function () {
    var dummyPosts = [
      {
        id: 1,
        title: 'intro',
        content: 'love'
      }, {
        id: 2,
        title: 'prep',
        content: 'hey'
      }, {
        id: 3,
        title: 'Day 1',
        content: 'good day'
      }
    ];
    return (
      <ul>
        {this.renderPosts(dummyPosts)}
      </ul>
    );
  }
});

module.exports = PostList;
