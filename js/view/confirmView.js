var ConfirmView = function (container, model) {
  // Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)
  // Test fixture
  model.addDishToMenu(1);
  model.addDishToMenu(3);
  model.addDishToMenu(100);
  // ----
  this.addDishToSelected = function(dish) {
    var dishesContainer = container
    dishesContainer.append('<div class="col-md-3">'+
          '<div class="course-box">'+
            '<img src="images/'+dish.image+'"></img>'+
            '<div class="course-name">'+dish.name+'</div>'+
          '</div>'+
        '</div>');
  };



  // Main
  _.each(model.selectedDishes,function(dish) {
    this.addDishToSelected(dish);
  }, this);
  this.addDishToSelected(model.getDish(1));
  this.numberOfGuests = container.find("#number-people");
};