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
    console.log(this.state.bets)
    return (
      <div className={this.state.bets.length > 0 ? 'card-panel col s12 green accent-3' : 'hidden'}>
        <h3>Thanks for the bet!</h3>
          <blockquote>
          <p>{this.state.bets.map(function(game, i){
                return( <p key={i}>Team: <strong>{game.name}</strong> Odds <strong>{game.odds}</strong>  Stake: <strong>{game.stake}</strong></p> )
              })}</p></blockquote>
      </div>
    );
  }
});

module.exports = Confirmation;