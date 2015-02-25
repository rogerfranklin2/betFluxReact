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
    <div className="card-panel col s12">
      <h3>Upcoming fixtures</h3>
      <table className="bordered hoverable centered">
      <thead>
        <tr>
          <th>Team 1</th>
          <th>vs</th>
          <th>Team 2</th>

        </tr>
      </thead>
      <tbody>
      {this.props.fixtures.games.map(function(game, index){

        var boundClick = this.addFixture.bind(this, game, 0);
        var boundClick2 = this.addFixture.bind(this, game, 1);
      
      
              return (
                <tr key={index} value={index} className={this.state.selected.indexOf(game) != -1 ? 'disabled' : ''}>
                  <td><a onClick={boundClick}>{game.teams[0].name} <span className="">Win({game.teams[0].odds})</span></a></td>
                  <td>vs</td>
                  <td><a onClick={boundClick2}>{game.teams[1].name} <span className="">Win({game.teams[0].odds})</span></a></td>

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
