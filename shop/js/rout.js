if (Meteor.isClient)
{
	Router.configure
	(
		{
			layoutTemplate: 'layout'
		}
	);

	Router.map(function()
	{
		this.route('/', function(){
			this.render('home');
		});
		this.route('/shop', function(){
			this.render('shop');
		});
		this.route('/cart', function(){
			this.render('cart');
			document.getElementById("navHOME").className = "";
			document.getElementById("navFAVO").className = "";
			document.getElementById("navCART").className = "current";
			document.getElementById("navCONT").className = "";
		});
		this.route('/contact', function(){
			this.render('contact');
		});
		this.route('/admin', function(){
			if(Meteor.userId() == Admin.findOne({}).id)
			{
				showToast("true", "Vítejte administrátore");
				this.render('admin');
			}
			else
			{
				Router.go('/');
			}
		});
		this.route('/user/:id', function(){
			this.render('useracc');
		});
		this.route('/:404', function(){
			this.render('error404');
		});

	});

}
