$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));
  var selectView = new SelectView($("#select-view"), model);
  var descriptionView = new DescriptionView($("body"), model);
  var confirmView = new ConfirmView($('#dinner-container'), model);
  var printView = new PrintView($('#print-view-box'), model);
  var ingredientView = new IngredientView($("body"),model);
});