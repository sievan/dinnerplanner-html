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
    console.log("update");
    container.html('');
    this.backButton = $('.back-button'); 
    this.setNumberOfGuests();
  };

  //Fields
  this.backButton = $('.back-button'); 

  // Init
  this.update(); 
};