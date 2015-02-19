var App = function(model) {
  // Views and model
  var views = {
    selectView: new SelectView($("#select-view"), model),
    summaryView: new SummaryView($(".summary-box"), model),
    // descriptionView: new DescriptionView($(".description-container"), model),
    confirmView: new ConfirmView($('.confirm-container'), model),
    printView: new PrintView($('.print-container'), model),
    ingredientView: new IngredientView($(".ingredient-box"),model)};

  var currentPage = 'index',
      viewsShown = {
        confirm: function() {
          this.hideAll();
          views.confirmView.show();
        },
        select: function() {
          this.hideAll();
          views.selectView.show();
          views.summaryView.show();
        },
        print: function() {
          this.hideAll();
          views.printView.show();
        },
        hideAll: function() {
          _.each(views, function(v, i) {
            v.hide();
          });
        }

      };


  this.switchView = function(view) {
    viewsShown[view]();
  };
}

$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	//And create the needed controllers and views
  window.app = new App(model);
  app.switchView('select')
});