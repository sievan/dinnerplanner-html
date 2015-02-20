var IngredientController = function (view, model) {
  _.bindAll(view, 'update');
  currentDish = 'hej';
  this.selectDish = function(dish) {
    view.update(model.getDish(dish));
    currentDish = dish;
  };
  view.confirmButton.click(function(e) {
    e.preventDefault();
    model.addDishToMenu(parseInt(currentDish));
    window.app.switchView('select');
  });
};