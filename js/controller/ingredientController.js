var IngredientController = function (view, model) {
  _.bindAll(view, 'update');
  this.selectDish = function(dish) {
    view.update(model.getDish(dish));
  };
  view.confirmButton.click(function(e) {
    e.preventDefault();
    // TODO add dish to menu
    window.app.switchView('select');
  });
};