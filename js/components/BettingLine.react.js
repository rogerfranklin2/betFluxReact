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
    console.log("HANDLING CHANGE");
    this.setState({value: event.target.value*2});
  },
  
  render: function(){
    return (
      <div key={this.props.key}>
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
