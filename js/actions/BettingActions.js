var AppDispatcher = require('../dispatcher/AppDispatcher');


var BettingActions = {
  receiveFixtures: function(data) {
    AppDispatcher.handleAction({
      actionType: "RECEIVE_FIXTURES",
      data: data
    });
  },
  addToSlip: function(data){
    AppDispatcher.handleAction({
      actionType: "ADD_TO_SLIP",
      data: data
    });
  },
  addToFixtures: function(data){
    AppDispatcher.handleAction({
      actionType: "ADD_TO_FIXTURES",
      data: data
    });
  },
  addToTotal: function(data){
    AppDispatcher.handleAction({
      actionType: "CALCULATE_TOTAL",
      data: data
    });
  },
  confirmBets: function(data){
    AppDispatcher.handleAction({
      actionType: "CONFIRM_BETS",
      data: data
    });
  }
}

module.exports = BettingActions;