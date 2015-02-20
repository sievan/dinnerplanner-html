var IngredientController = function (view, model) {
  _.bindAll(view, 'update');
  this.selectDish = function(dish) {
    view.update(model.getDish(dish));
  };
};