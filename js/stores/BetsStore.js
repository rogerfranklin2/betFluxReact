var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');


var _currentBets = [];
var _confirmedBets = [];

var BetsStore = _.extend({}, EventEmitter.prototype, {
    getBets: function(){
      return _currentBets;
    },
  
    getTotal: function(){
      return _.reduce(_.pluck(_currentBets, 'stake'), function(total, num){ if(num == undefined){num = 0;};return total + parseInt(num); }, 0)
    },
  
    getConfirmedBets: function(){
      return _confirmedBets;
    },
  
    addFixture: function(data){
      _currentBets.push(data);
    },
  
    removeFixture: function(fixture){
      _currentBets = _.without(_currentBets, fixture);
    },
  
    addToTotal: function(data){
      for(var i in _currentBets){        
        if (_currentBets[i].name == data.name){
          _currentBets[i] = _.extend(_currentBets[i], {stake: data.value});
          break;
        }
      }
    },
  
    confirmBets: function(data){
      _confirmedBets = _currentBets;
      _currentBets = [];
    },
  
    // Emit Change event
    emitChange: function() {
        this.emit('change');
    },

    // Add change listener
    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
})

AppDispatcher.register(function(payload) {
    var action = payload.action
    
    switch (action.actionType) {
        
        case "ADD_TO_SLIP":
            BetsStore.addFixture(action.data);
            break;
        
        case "ADD_TO_FIXTURES":
            BetsStore.removeFixture(action.data);
            break;
        
        case "CALCULATE_TOTAL":
            BetsStore.addToTotal(action.data);
            break;
        
        case "CONFIRM_BETS":
            BetsStore.confirmBets(action.data);
            break;
        

        default:
            console.log("DEFAULT: " + action.actionType);
            return true;
    }
  
    BetsStore.emitChange();

    return true;


});


module.exports = BetsStore;