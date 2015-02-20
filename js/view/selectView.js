//ExampleView Object constructor
var SelectView = function (container, model, router) {
  // Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)


  // Events
  $('.confirm-dinner').click(function(e) {
    e.preventDefault();
    window.app.switchView('confirm');
  });
  $('.dish-picker').click(function(e) {
    e.preventDefault();
    window.app.switchView('description');
  });

  this.addDishToMenu = function(dish) {
    var menuContainer = container.find('#menu-container');
    menuContainer.append('<div class="course-container col-md-2"><a href="description.html"><div class="course-box"><img src="images/'+dish.image+'"></img><div class="course-name">'+dish.name+'</div></div><div>'+dish.description+'</div></a></div>')
  };
  this.show =function() {
    container.show();
  };
  this.hide = function() {
    container.hide();
  };



  // Main
  _.each(model.getAllDishes('main dish').toArray(), function(dish) {
    this.addDishToMenu(dish);
  }, this);
  this.numberOfGuests = container.find("#number-people");
};