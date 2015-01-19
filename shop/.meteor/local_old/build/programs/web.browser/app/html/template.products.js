(function(){
Template.__checkName("products");
Template["products"] = new Template("Template.products", (function() {
  var view = this;
  return HTML.UL({
    "class": "catCardList"
  }, "\n      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("products"));
  }, function() {
    return [ "\n\n\n	      ", HTML.LI({
      "class": "catCardList"
    }, "\n		      ", HTML.DIV({
      "class": "catCard"
    }, HTML.A({
      href: "#"
    }, HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("image"));
      },
      alt: ""
    })), "\n			      ", HTML.DIV({
      "class": "lowerCatCard"
    }, "\n				      ", HTML.H3(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("product"));
    })), "\n				      ", HTML.DIV({
      "class": "startingPrice"
    }, "Naše cena: ", HTML.SPAN(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("price"));
    }), ",-")), "\n				      ", HTML.P(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("description"));
    })), "\n				      ", HTML.DIV({
      id: "catCardButton",
      "class": "prod_button"
    }, HTML.A({
      href: "#"
    }, "Do košíku: ", HTML.SPAN(Blaze.View(function() {
      return Spacebars.mustache(view.lookup("price"));
    }), ",-"))), "\n				      ", HTML.DIV({
      id: "catCardButton",
      "class": "prod_button ided"
    }, HTML.A({
      href: "#",
      id: function() {
        return Spacebars.mustache(view.lookup("id"));
      },
      "data-toggle": "modal",
      "data-target": "#gameDetail"
    }, "Detail produktu")), "\n			      "), "\n		      "), "\n	      "), "\n\n\n      " ];
  }), "\n    ");
}));

})();
