var SelectController = function (view, model) {
  this.addListeners = function() {
    model.listenTo(view.update);
  };
  view.dishLink.click(function(e) {
    e.preventDefault();
    window.app.switchView('description', $(e.target).parents('a').attr('data-id'));
  });
  this.addListeners();
};