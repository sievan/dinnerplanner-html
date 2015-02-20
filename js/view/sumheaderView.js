var SumheaderView = function (container, model) {
  
   // Functions
  this.setNumberOfGuests = function() {
    var guestContainer = container.find('.sumheader-container');
    container.append('<h2 class="mydinner-header col-md-9">'+
                          'My Dinner: '+model.getNumberOfGuests()+
                          ' people</h2>'+
                          '<div class="col-md-3">'+
                          '<a href="selectdish.html" class="btn start-button back-button">'+
                          'Go back and edit dinner</a></div>'
                          );
  };
  this.show =function() {
    container.show();
  };
  this.hide = function() {
    container.hide();
  };

  // Main
  this.setNumberOfGuests();

  // Events
  $('.back-button').click(function(e) {
    e.preventDefault();
    window.app.switchView('select');
  });
};