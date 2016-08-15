var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div className="app">
      <Navigation/>
      {props.children}
    </div>
  );
};

module.exports = Main;
