var PrintView = function (container, model) {
  // Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)

  // Test fixture
  model.addDishToMenu(1);
  model.addDishToMenu(3);
  model.addDishToMenu(100);
  // ----
  this.addDishToSelected = function(dish) {
    var dishesContainer = container
    dishesContainer.append('<div class="row">'+
            '<div class="course-container course-box col-md-2"><img src="images/'+dish.image+'"></img></div>'+
            '<div class="course-container col-md-4">'+
                '<h1>'+dish.name+'</h1>'+
                '<br/>'+
                '<p>'+dish.description+'</p>'+
            '</div>'+
            '<div class="course-container col-md-4">'+
                '<h2>PREPARATION</h2>'+
                '<br/>'+
                '<p>'+dish.description+'</p>'+
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