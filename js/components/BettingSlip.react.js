var React = require('react');
var BettingActions = require('../actions/BettingActions');
var BettingLine = require('./BettingLine.react');

var BettingSlip = React.createClass({
  
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
      <button>Confirm bets</button>
    </div>
    );
  }
});

module.exports = BettingSlip;
