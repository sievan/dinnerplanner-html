var DescriptionView = function (container, model) {
  // Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)
  console.log(model)
  // Test fixture
  model.addDishToMenu(1);
  model.addDishToMenu(3);
  model.addDishToMenu(100);
  // ----
  this.addDishToDescription = function(dish) {
    var dishContainer = container.find('#description-container');
    console.log(dishContainer)
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
      console.log('hej', ingredientContainer)
      ingredientContainer.append('<div class="row">'+
                '<div class="col-md-2">'+ingredient.quantity+'</div>'+
                '<div class="col-md-6">'+ingredient.name+'</div>'+
                '<div class="col-md-2">SEK</div>'+
                '<div class="col-md-2">'+ingredient.price+'</div>'+
              '</div>')
    });
  };



  // Main
  console.log(container)
  this.addDishToDescription(model.getDish(1));
  this.addIngredients(model.getDish(1));
  // _.each(model.getAllDishes('main dish').toArray(), function(dish) {
  //   console.log('hej')
  //   this.addDishToMenu(dish);
  // }, this);
};