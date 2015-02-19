//ExampleView Object constructor
var SelectView = function (container, model) {
  // Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)

  // Test fixture
  model.addDishToMenu(1);
  model.addDishToMenu(3);
  model.addDishToMenu(100);
  // ----
  this.addDishToMenu = function(dish) {
    var menuContainer = container.find('#menu-container');
    menuContainer.append('<div class="course-container col-md-2"><a href="description.html"><div class="course-box"><img src="images/'+dish.image+'"></img><div class="course-name">'+dish.name+'</div></div><div>'+dish.description+'</div></a></div>')
  };



  // Main
  _.each(model.getAllDishes('main dish').toArray(), function(dish) {
    this.addDishToMenu(dish);
  }, this);
  this.numberOfGuests = container.find("#number-people");
};