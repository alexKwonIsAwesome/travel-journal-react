var React = require('react');

var App = React.createClass({
  render: function () {
   return (
     <div>
      <p>Hello world!</p>
      {this.props.children}
     </div>
   );
  }
});

module.exports = App;
