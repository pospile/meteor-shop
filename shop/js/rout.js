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
		});
		this.route('/contact', function(){
			this.render('contact');
		});
		this.route('/:404', function(){
			this.render('error404');
		});

	});

}
