var React = require('react');
var BettingActions = require('../actions/BettingActions');

var BettingSlip = React.createClass({
  
  addToFixtures: function(data){
    BettingActions.addToFixtures(data);
  },
  
  render: function(){
    return (
    <div className="betting-slip slider">
      BettingSLIP!      

      <form className="pure-form">
      {this.props.activeBets.map(function(game, index){
        var removeFixture = this.addToFixtures.bind(this, game);
          return (
            <div key={index} value={index}>
              <p>{game.name} ({game.odds})
                <button onClick={removeFixture} className="pure-button pure-button-primary">+</button>
                <input />
                Expected returns: 0.00
              </p>

            </div>
          );
        }, this)}
      <button>Confirm bets</button>
      </form>
    </div>
    );
  }
});

module.exports = BettingSlip;
