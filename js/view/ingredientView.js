var IngredientView = function (container, model) {
  // Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)

  // Test fixture
  var testDish = model.getDish(1);
  // ----
  
  // Fields
  var ingredientContainer = container.find('#ingredient-list');
  
  // Functions

  this.setNumberOfGuests = function() {
    var guestContainer = container.find('#ingredient-guests');
    guestContainer.append('<h3>INGREDIENTS FOR '+model.getNumberOfGuests()+' PEOPLE</h3>');
  };

  this.addIngredients = function(dish) {
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

  this.show =function() {
    container.show();
  };

  this.hide = function() {
    container.hide();
  };

  this.update = function(dish) {
    ingredientContainer.html('');
    this.addIngredients(dish);
    this.setTotalPrice(dish);
  };
};
