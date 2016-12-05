var React = require('react');

var PostList = React.createClass({
  render: function () {
   return (
     <ul>
      <li>Intro</li>
      <li>Prep</li>
      <li>Day 1</li>
      <li>Day 2</li>
      <li>Day 3</li>
     </ul>
   );
  }
});

module.exports = PostList;
