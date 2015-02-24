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
    console.log("adding to total");
    AppDispatcher.handleAction({
      actionType: "CALCULATE_TOTAL",
      data: data
    });
  }
}

module.exports = BettingActions;