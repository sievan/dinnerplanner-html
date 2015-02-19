var SummaryView = function (container, model) {
  // Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)

  // Test fixture
  model.addDishToMenu(1);
  model.addDishToMenu(3);
  model.addDishToMenu(100);

  // Set initial values
  model.setNumberOfGuests($('#number-people').val());

  // Event listeners

  $('#number-people').change(function(e) {
    model.setNumberOfGuests(e.target.val);
  });

  this.addDishToSelected = function(dish) {
    var dishesContainer = $('#selected-dishes');
    dishesContainer.append('<div class="col-md-8">'+dish.name+'</div><div class="col-md-4">'+model.getDishPrice(dish.id)+'</div>');
  };

  this.setMenuPrice = function() {
    $('.menu-price').html(model.getTotalMenuPrice());
  };

  this.setNumberOfGuests = function(n) {
    model.setNumberOfGuests(n);
  };

  // Main
  _.each(model.selectedDishes,function(dish) {
    this.addDishToSelected(dish);
  }, this);
  this.setMenuPrice();
};