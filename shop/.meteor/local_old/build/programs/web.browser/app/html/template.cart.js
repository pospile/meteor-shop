(function(){
Template.__checkName("cart");
Template["cart"] = new Template("Template.cart", (function() {
  var view = this;
  return HTML.Raw('<div class="jumbotron">\n		<div class="container text-center">\n			<h2>Košík</h2>\n			<p>Váš košík je prázdný. Vložte prosím zboží do košíku.</p>\n			<p><a class="btn btn-primary btn-lg" href="#" role="button">Ke kase </a></p>\n		</div>\n	</div>');
}));

})();
