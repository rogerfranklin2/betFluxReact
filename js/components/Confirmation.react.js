var React = require('react');
var BettingActions = require('../actions/BettingActions');
var BetsStore = require('../stores/BetsStore');

var Confirmation = React.createClass({
  getInitialState: function(){
    return ({bets: BetsStore.getConfirmedBets()});
  },
  
    
  _onChange: function() {
    this.setState({bets: BetsStore.getConfirmedBets()});
  },
  
  componentDidMount: function(){
    BetsStore.addChangeListener(this._onChange);
  },
  
  componentWillUnmount: function(){
    BetsStore.removeChangeListener(this._onChange);
  },
  
  render: function(){
    return (
      <div className={this.state.bets.length > 0 ? '' : 'hidden'}>
        <h3>Thanks for the bet!</h3>
          <p>{this.state.bets}</p>
      </div>
    );
  }
});

module.exports = Confirmation;