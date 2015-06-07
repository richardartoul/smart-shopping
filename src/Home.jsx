var React = require('react');
var Eventful = require('eventful-react');
var List = require('./List');
var auth = require('./auth');

var Home = Eventful.createClass({
  statics: {
    willTransitionTo: function (transition) {
      if (!auth.loggedIn()) {
        //Login.attemptedTransition = transition;
        transition.redirect('/login');
      }
    }
  },

  render: function() {
    return (
      <div id="home">
        <List items={this.props.data} />
      </div>
    );
  }
});

module.exports = Home;
