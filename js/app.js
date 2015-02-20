var App = function(model) {
  // Views and model
  var views = {
    selectView: new SelectView($(".select-container"), model),
    summaryView: new SummaryView($(".summary-container"), model),
    descriptionView: new DescriptionView($(".description-container"), model),
    confirmView: new ConfirmView($('.confirm-container'), model),
    printView: new PrintView($('.print-container'), model),
    ingredientView: new IngredientView($(".ingredient-container"),model)};

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
        description: function() {
          this.hideAll();
          views.descriptionView.show();
          views.summaryView.show();
          views.ingredientView.show();
        },
        hideAll: function() {
          _.each(views, function(v, i) {
            v.hide();
          });
          console.log("Hide all");
        }
      };


  this.switchView = function(view) {
    viewsShown[view]();
  };
}

$(function() {
	//We instantiate our model
	var model = new DinnerModel();
  // Test fixture
  model.addDishToMenu(1);
  model.addDishToMenu(3);
  model.addDishToMenu(100);
  model.addDishToMenu(201);
  model.setNumberOfGuests(4);
  // ----
	//And create the needed controllers and views
  window.app = new App(model);
  app.switchView('select')
});