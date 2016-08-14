var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
          // fall through
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      console.log(newCount);
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({countdownStatus: newStatus});
  },
  renderControlArea1: function() {
    var {countdownStatus} = this.state;
    if (countdownStatus !== 'stopped') {
      return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
    } else {
      return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
    }
  },
  render: function () {
    var {count} = this.state;

    return (
      <div>
        <Clock totalSeconds={count}/>
        {this.renderControlArea1()}
      </div>
    );
  }
});

module.exports = Countdown;