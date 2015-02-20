//ExampleView Object constructor
var SelectView = function (container, model, router) {
  // Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)

  var menuContainer = container.find('#menu-container');

  this.dishLink = container.find('.dish-picker');

  // Functions
  this.addDishToMenu = function(dish) {
    menuContainer.append('<div class="course-container col-md-2"><a href="description.html" data-id="'+dish.id+'"><div class="course-box"><img src="images/'+dish.image+'"></img><div class="course-name">'+dish.name+'</div></div><div>'+dish.description+'</div></a></div>');
  };
  this.show =function() {
    container.show();
  };

  this.hide = function() {
    container.hide();
  };

  this.update = function() {
    menuContainer.html('');
    _.each(model.getAllDishes('main dish').toArray(), function(dish) {
      this.addDishToMenu(dish);
    }, this);
  }

  // Main

  this.update();
};
