var DescriptionView = function (container, model) {
  // Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)
  // Test fixture
  var testDish = model.getDish(1);
  // ----

  // Fields
  var dishContainer = container.find('#dish-description');

  // Functions

  this.addDishToDescription = function(dish) {
    console.log(dish)
    dishContainer.append('<h1>'+dish.name+'</h1>' +
            '<img src="images/'+dish.image+'"></img>' +
            '<p>Bacon ipsum dolor amet bresaola tongue short loin pig, sausage chuck kielbasa brisket shank filet mignon cupim venison jerky flank. Pork chop shankle shoulder pancetta andouille kielbasa meatball tongue tail ball tip.</p>'+
            '<a href="selectdish.html" class="btn start-button back-button">Back to Select Dish</a>'+
            '<h2>PREPARATION</h2>'+
            '<p>Bacon ipsum dolor amet bresaola tongue short loin pig, sausage chuck kielbasa brisket shank filet mignon cupim venison jerky flank. Pork chop shankle shoulder pancetta andouille kielbasa meatball tongue tail ball tip.</p>');
    this.confirmButton = dishContainer.find('.confirm-dish');
    this.backButton = dishContainer.find('.back-button')
  };
  this.show =function() {
    container.show();
  };
  this.hide = function() {
    container.hide();
  };
  this.update = function(dish) {
    console.log(dish)
    dishContainer.html('');
    this.addDishToDescription(dish);
  };
};
