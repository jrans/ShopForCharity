var React = require('react');

var App = React.createClass({

  render: function () {
    getInitialState: {
      language: 'English'
    };
    return(
      <div>
        <h1>Shopping for Charity</h1>
      </div>
    );
  }
});

module.exports = App;
