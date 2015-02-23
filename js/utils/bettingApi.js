var BettingActions = require('../actions/BettingActions');

module.exports = {
    getFixtures: function() {
        
        var data = JSON.parse(localStorage.getItem('fixtures'));
        BettingActions.receiveFixtures(data);
    }
}