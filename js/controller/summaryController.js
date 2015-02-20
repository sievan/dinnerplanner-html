var SummaryController = function (view, model) {
  _.bindAll(view, 'update');
  this.addListeners = function() {
    model.listenTo(view.update);
  };
  view.numberPeople.change(function(e) {
    model.setNumberOfGuests($(e.target).val());
  });
  view.confirmButton.click(function(e) {
    e.preventDefault();
    window.app.switchView('confirm');
  });
  this.addListeners();
};