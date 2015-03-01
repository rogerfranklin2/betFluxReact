var React = require('react');
var FixturesStore = require('../stores/FixturesStore');
var BetsStore = require('../stores/BetsStore');
var Fixtures = require('./Fixtures.react');
var BettingSlip = require('./BettingSlip.react');
var Confirmation = require('./Confirmation.react');

function getFixturesState(){
  return {
    games: FixturesStore.getFixtures(),
    activeBets: BetsStore.getBets()
  };
}

var BettingApp = React.createClass({
  
  getInitialState: function(){
    return getFixturesState()
  },
  
  componentDidMount: function(){
    FixturesStore.addChangeListener(this._onChange);
    BetsStore.addChangeListener(this._onChange);
  },
  
  componentWillUnmount: function(){
    FixturesStore.removeChangeListener(this._onChange);
    BetsStore.removeChangeListener(this._onChange);
  },
  
  render: function(){
    return (
    
    <div className="betting row">
      <h1>coinBet</h1>
      <Confirmation />
      <Fixtures fixtures={this.state.games}/>
      <BettingSlip activeBets={this.state.activeBets}/>     

    </div>
    );
  },
  
  _onChange: function() {
    this.setState(getFixturesState());
  }
  
});

module.exports = BettingApp;