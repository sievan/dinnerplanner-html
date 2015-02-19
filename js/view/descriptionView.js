var DescriptionView = function (container, model) {
  // Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)
  // Test fixture
  model.addDishToMenu(1);
  model.addDishToMenu(3);
  model.addDishToMenu(100);
  var testDish = model.getDish(1);
  // ----
  this.addDishToDescription = function(dish) {
    var dishContainer = container.find('#description-container');
    dishContainer.append('<h1>'+dish.name+'</h1>' +
            '<img src="images/'+dish.image+'"></img>' +
            '<p>Bacon ipsum dolor amet bresaola tongue short loin pig, sausage chuck kielbasa brisket shank filet mignon cupim venison jerky flank. Pork chop shankle shoulder pancetta andouille kielbasa meatball tongue tail ball tip.</p>'+
            '<a href="selectdish.html" class="btn start-button">Back to Select Dish</a>'+
            '<h2>PREPARATION</h2>'+
            '<p>Bacon ipsum dolor amet bresaola tongue short loin pig, sausage chuck kielbasa brisket shank filet mignon cupim venison jerky flank. Pork chop shankle shoulder pancetta andouille kielbasa meatball tongue tail ball tip.</p>');
  };
  this.addIngredients = function(dish) {
    var ingredientContainer = container.find('#ingredient-container');
    _.each(dish.ingredients, function(ingredient) {
      ingredientContainer.append('<div class="row">'+
                '<div class="col-md-2">'+ingredient.quantity+'</div>'+
                '<div class="col-md-6">'+ingredient.name+'</div>'+
                '<div class="col-md-2">SEK</div>'+
                '<div class="col-md-2">'+ingredient.price+'</div>'+
              '</div>')
    });
  };
  this.setTotalPrice = function(dish) {
    container.find('#price-per-dish').html(model.getDishPrice(dish.id));
  };

  // Main
  this.addDishToDescription(testDish);
  this.addIngredients(testDish);
  this.setTotalPrice(testDish);

};