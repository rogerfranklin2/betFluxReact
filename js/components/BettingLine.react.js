var React = require('react');
var BettingActions = require('../actions/BettingActions');

var BettingLine = React.createClass({
  
  getInitialState: function() {
    return {value: 0.0, estimate: 0.0};
  },
  
  addToFixtures: function(data){
    BettingActions.addToFixtures(data);
  },
  
  handleChange: function(event){

    if (this.isANumber(event.target.value)) {
      BettingActions.addToTotal(-this.state.value)
      this.setState({value: event.target.value});
      BettingActions.addToTotal(event.target.value);
    }
    else{
      BettingActions.addToTotal(-this.state.value)
      this.setState({value: 0});
      BettingActions.addToTotal(0);
    }
    this.calculateEsitmated(event.target.value);
  },
  
  calculateEsitmated: function(stake){
    var odds = this.props.game.odds.split('/')
    var estimate = (stake / odds[1] * odds[0]+ parseInt(stake))
    if(this.isANumber(estimate)){
      this.setState({estimate: estimate})
    } else {
      this.setState({estimate: 0}) 
    }
  },
  
  isANumber: function(number){
    return ((number - 0) == number && (''+number).trim().length > 0)
  },
  
  render: function(){
    return (
      <div>
        <p>{this.props.game.name} ({this.props.game.odds})
          <input onChange={this.handleChange} pattern="[0-9]*"/>
          <button onClick={this.addToFixtures}  className="pure-button pure-button-primary">+</button>
          Expected returns: {this.state.estimate}
        </p>
      </div>
    );
  }
});

module.exports = BettingLine;
