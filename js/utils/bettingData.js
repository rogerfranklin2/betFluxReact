module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('fixtures', JSON.stringify(
    
    
  {
    "games": [
        {
            "id": "1",
            "teams": [{"name":"GIA","odds":"2/1"},{"name":"GMB","odds":"1/2"}]
        },
        {
            "id": "2",
            "teams": [{"name":"H2K","odds":"3/1"},{"name":"EL", "odds":"1/3"}]
        },
        {
            "id": "3",
            "teams": [{"name":"MYM", "odds":"4/1"},{"name":"FNC", "odds":"1/4"}],
        },
        {
            "id": "4",
            "size": "44mb",
            "teams": [{"name":"ROC", "odds":"5/1"},{"name":"UOL", "odds":"1/5"}]
        },
        {
            "id": "5",
            "size": "55",
            "teams": [{"name":"CW", "odds":"6/1"},{"name": "SK", "odds":"1/6"}]
        }
    ]
}


      ));
    }

};