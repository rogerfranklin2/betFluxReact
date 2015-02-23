var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');

var _fixtures = null;

function loadFixtures(data) {
    _fixtures = data;
}


var FixturesStore = _.extend({}, EventEmitter.prototype, {
    getFixtures: function() {
        return _fixtures;
    },
  
    removeFixture: function(data){

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
});

AppDispatcher.register(function(payload) {
    var action = payload.action
    var text;

    switch (action.actionType) {

        case "RECEIVE_FIXTURES":
            loadFixtures(action.data);
            break;
        
        case "ADD_TO_SLIP":
            FixturesStore.removeFixture(action.data);
            break;
        
        case "ADD_TO_FIXTURES":
            FixturesStore.removeFixture(action.data);
            break;

        default:
            console.log("DEFAULT");
            return true;
    }
  
    FixturesStore.emitChange();

    return true;


});


module.exports = FixturesStore;