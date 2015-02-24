var React = require('react');
var BettingActions = require('../actions/BettingActions');

var BettingLine = React.createClass({
  
  getInitialState: function() {
    return {value: 0.0};
  },
  
  addToFixtures: function(data){
    BettingActions.addToFixtures(data);
  },
  
  handleChange: function(event){
    
    this.setState({value: event.target.value});
    console.log("handling change")
    BettingActions.addToTotal(event.target.value);
  },
  
  render: function(){
    return (
      <div>
        <p>{this.props.game.name} ({this.props.game.odds})
          <button onClick={this.addToFixtures}  className="pure-button pure-button-primary">+</button>
          <input onChange={this.handleChange}/>
          Expected returns: {this.state.value}
        </p>
      </div>
    );
  }
});

module.exports = BettingLine;
