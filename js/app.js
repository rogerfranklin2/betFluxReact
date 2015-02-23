window.React = require('react');
var BettingData = require('./utils/bettingData')
var BettingAPI = require('./utils/bettingApi');
var BettingApp = require('./components/BettingApp.react');

BettingData.init();

BettingAPI.getFixtures();

React.render( 
    <BettingApp /> ,
    document.getElementById('sky-bet')
);