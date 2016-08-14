var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  renderStartStopButton: function () {
    var {countdownStatus} = this.props;
    if (countdownStatus === 'started') {
      return <button className="button secondary">Pause</button>;
    } else if (countdownStatus === 'paused') {
      return <button className="button primary">Start</button>;
    }
  },
  render: function () {
    return (
      <div className="controls">
        {this.renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
