(function(){
Template.body.addContent((function() {
  var view = this;
  return [ "Ahojky :)\n", Spacebars.include(view.lookupTemplate("modal")), "\n\n\n", Spacebars.include(view.lookupTemplate("navbar")), "\n\n", HTML.DIV({
    "class": "content"
  }, "\n	", HTML.DIV({
    "class": "row"
  }, "\n		", HTML.DIV({
    "class": "col-sm-8"
  }, "\n			", HTML.Raw('<div class="alert alert-info" role="alert">\n				! Obchod je v aktivním vývoji. Prosím omluvte případné problémy\n			</div>'), "\n\n\n            ", Spacebars.include(view.lookupTemplate("Products")), "\n\n		"), "\n\n\n		", HTML.DIV({
    "class": "col-sm-4"
  }, "\n            ", Spacebars.include(view.lookupTemplate("cart")), "\n			", HTML.Raw("<br>"), "\n            ", Spacebars.include(view.lookupTemplate("detail")), "\n		"), "\n	"), "\n    ", Spacebars.include(view.lookupTemplate("footer")), "\n") ];
}));
Meteor.startup(Template.body.renderToDocument);

})();
