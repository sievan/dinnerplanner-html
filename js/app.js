$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	//And create the needed controllers and views
  var selectView = new SelectView($("#select-view"), model);
  var summaryView = new SummaryView($("#select-view"), model);
  var descriptionView = new DescriptionView($("body"), model);
  var confirmView = new ConfirmView($('.confirm-container'), model);
  var printView = new PrintView($('#print-view-box'), model);
  var ingredientView = new IngredientView($("body"),model);
});