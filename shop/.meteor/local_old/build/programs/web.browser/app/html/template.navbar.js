(function(){
Template.__checkName("navbar");
Template["navbar"] = new Template("Template.navbar", (function() {
  var view = this;
  return HTML.Raw('<nav class="navbar navbar-default">\n		<div class="container-fluid">\n			<div class="navbar-header">\n				<a class="navbar-brand" href="#">AgroStore</a>\n			</div>\n			<div>\n				<ul class="nav navbar-nav">\n					<li class="current"><a href="#">Home</a></li>\n					<li><a href="#">Obchod</a></li>\n					<li><a href="#">Košík</a></li>\n					<li><a href="#">Kontakt</a></li>\n				</ul>\n			</div>\n		</div>\n	</nav>');
}));

})();
