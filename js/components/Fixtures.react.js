var React = require('react');
var BettingActions = require('../actions/BettingActions');



var Fixtures = React.createClass({
  
  getInitialState: function() {
    return {selected: []};
  },
  
  addFixture: function(game, win){
    this.setState({selected: this.state.selected.concat(game)});
    BettingActions.addToSlip(game.teams[win]);
  },
  
  render: function(){
    return (
    <div>
      <table>
      <thead>
        <tr>
          <th>Team 1</th>
          <th></th>
          <th>vs</th>
          <th></th>
          <th>Team 2</th>

        </tr>
      </thead>
      <tbody>
      {this.props.fixtures.games.map(function(game, index){

        var boundClick = this.addFixture.bind(this, game, 0);
        var boundClick2 = this.addFixture.bind(this, game, 1);
      
      
              return (
                <tr key={index} value={index} className={this.state.selected.indexOf(game) != -1 ? 'disabled' : ''}>
                  <td>{game.teams[0].name}</td>
                  <td><button onClick={boundClick}>Win({game.teams[0].odds})</button></td>
                  <td>vs</td>
                  <td><button onClick={boundClick2}>Win({game.teams[1].odds})</button></td>
                  <td>{game.teams[1].name}</td>

                </tr>
              );
            }, this)}
      </tbody>
      
      </table>
    </div>
    );
  }
});


module.exports = Fixtures;
