var React = require('react');
var BettingActions = require('../actions/BettingActions');
var BettingLine = require('./BettingLine.react');
var BetsStore = require('../stores/BetsStore');

var BettingSlip = React.createClass({
  
  getInitialState: function() {
    return {value: BetsStore.getTotal()};
  },
  
  _onChange: function() {
    this.setState({value: BetsStore.getTotal()});
  },
  
  componentDidMount: function(){
    BetsStore.addChangeListener(this._onChange);
  },
  
  componentWillUnmount: function(){
    BetsStore.removeChangeListener(this._onChange);
  },
  
  addToFixtures: function(data){
    BettingActions.addToFixtures(data);
  },
  
  render: function(){
    return (
    <div className="betting-slip slider">
      BettingSLIP!      

      {this.props.activeBets.map(function(game, index){
          return (
            <BettingLine game={game} key={index}></BettingLine>
          );
        })}
      <button>Confirm bets</button><p>Total: {this.state.value}</p>
    </div>
    );
  }
});

module.exports = BettingSlip;
