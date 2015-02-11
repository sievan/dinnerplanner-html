//ExampleView Object constructor
var SelectView = function (container, model) {
  // Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)

  // Test fixture
  model.addDishToMenu(1);
  model.addDishToMenu(3);
  model.addDishToMenu(100);
  console.log(model.selectedDishes)
  // ----
  this.addDishToSelected = function(dish) {
    var dishesContainer = container.find('#selected-dishes');

    dishesContainer.append('<div class="col-md-8">'+dish.name+'</div><div class="col-md-4">'+model.getDishPrice(dish.id)+'</div>');
  };



  // Main
  _.each(model.selectedDishes,function(dish) {
    this.addDishToSelected(dish);
  }, this);
  this.addDishToSelected(model.getDish(1));
  this.numberOfGuests = container.find("#number-people");
  console.log(this.numberOfGuests.attr('value'));
};