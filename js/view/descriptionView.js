var DescriptionView = function (container, model) {
  // Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)
  // Test fixture
  var testDish = model.getDish(1);
  // ----

  // Fields
  var dishContainer = container.find('#dish-description');

  // Events
  $('.confirm-dish').click(function(e) {
    e.preventDefault();
    // add dish to menu
    window.app.switchView('select');
  });
  $('.back-button').click(function(e) {
    e.preventDefault();
    window.app.switchView('select');
  });

  // Functions
   
  this.addDishToDescription = function(dish) {
    dishContainer.append('<h1>'+dish.name+'</h1>' +
            '<img src="images/'+dish.image+'"></img>' +
            '<p>Bacon ipsum dolor amet bresaola tongue short loin pig, sausage chuck kielbasa brisket shank filet mignon cupim venison jerky flank. Pork chop shankle shoulder pancetta andouille kielbasa meatball tongue tail ball tip.</p>'+
            '<a href="selectdish.html" class="btn start-button back-button">Back to Select Dish</a>'+
            '<h2>PREPARATION</h2>'+
            '<p>Bacon ipsum dolor amet bresaola tongue short loin pig, sausage chuck kielbasa brisket shank filet mignon cupim venison jerky flank. Pork chop shankle shoulder pancetta andouille kielbasa meatball tongue tail ball tip.</p>');
  };
  this.show =function() {
    container.show();
  };
  this.hide = function() {
    container.hide();
  };
  this.update = function() {
    dishContainer.html('');
    this.addDishToDescription(testDish);
  }
  // Main
  this.update();
};
