var DescriptionController = function (view, model) {
  this.addListeners = function() {
    model.listenTo(view.update);
  };
  this.selectDish = function(dish){
    view.update(model.getDish(dish));
    view.confirmButton.click(function(e) {
      e.preventDefault();
      // TODO add dish to menu
      window.app.switchView('select');
    });
    view.backButton.click(function(e) {
      e.preventDefault();
      window.app.switchView('select');
    });
  };
  this.addListeners();
};