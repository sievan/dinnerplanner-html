var ConfirmView = function (container, model) {
  // Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)

  // Fields

  var dishesContainer = container.find('#dinner-container');

  // Events
  $('.back-button').click(function(e) {
    e.preventDefault();
    window.app.switchView('select');
  });
  $('.print-button').click(function(e) {
    e.preventDefault();
    window.app.switchView('print');
  });

  // Functions
  this.addDishToSelected = function(dish, update) {
    dishesContainer.append('<div class="col-md-3">'+
          '<div class="course-box">'+
            '<img src="images/'+dish.image+'"></img>'+
            '<div class="course-name">'+dish.name+'</div>'+
          '</div>'+
        '</div>');
  };

  this.setMenuPrice = function() {
    container.find('.menu-price').html(model.getTotalMenuPrice());
  };

  this.show =function() {
    container.show();
  };

  this.hide = function() {
    container.hide();
  };

  this.update = function() {
    dishesContainer.html('');
    _.each(model.selectedDishes,function(dish) {
      this.addDishToSelected(dish);
    }, this);
  };

  // Main
  this.update();
  this.setMenuPrice();
};