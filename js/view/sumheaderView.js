var SumheaderView = function (container, model) {
  
  // Functions
  this.setNumberOfGuests = function() {
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
  this.update = function() {
    container.html('');
    this.setNumberOfGuests();
    this.backButton = container.find('.back-button');
  };

  //Fields
  this.backButton = container.find('.back-button'); 

  // Init
  this.update(); 
};