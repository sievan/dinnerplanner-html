var SelectController = function (view, model) {
  _.bindAll(view, 'update');
  categories = {
    Main: 'main dish',
    Dessert: 'dessert',
    Apetizer: 'starter',
    Other: 'other'
  };
  view.dishLink.click(function(e) {
    e.preventDefault();
    window.app.switchView('description', $(e.target).parents('a').attr('data-id'));
  });
  view.dropDown.change(function(e) {
    view.update(categories[$(e.target).find('option:selected').text()]);
  });
  // Init
  view.update('main dish');
};