var React = require('react');
var BettingActions = require('../actions/BettingActions');
var BettingLine = require('./BettingLine.react');
var BetsStore = require('../stores/BetsStore');

var BettingSlip = React.createClass({
  
  getInitialState: function() {
    return {value: BetsStore.getTotal(),
            expanded: false};
  },
  
  _onChange: function() {
    this.setState({value: BetsStore.getTotal(), expanded: true});
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
  
  toggleSlip: function(){
    this.setState({expanded: !this.state.expanded});
  },
  
  render: function(){
    return (
    <div className="betting-slip">
      <a onClick={this.toggleSlip}>Bet Slip Click to expand >> </a>
        
      <div className={this.state.expanded ? 'expanded' : 'hidden'}>

      {this.props.activeBets.map(function(game, index){
          return (
            <BettingLine game={game} key={index}></BettingLine>
          );
        })}
      <button>Confirm bets</button><p>Total: {this.state.value}</p>
      </div>
    </div>
    );
  }
});

module.exports = BettingSlip;
