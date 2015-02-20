var SummaryController = function (view, model) {
  _.bindAll(view, 'update');
  this.addListeners = function() {
    model.listenTo(view.update);
  };
  view.numberPeople.change(function(e) {
    model.setNumberOfGuests($(e.target).val());
  });
  this.addListeners();
};