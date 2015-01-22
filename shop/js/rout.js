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
			try
			{
				document.getElementById("navHOME").className = "current";
				document.getElementById("navFAVO").className = "";
				document.getElementById("navCART").className = "";
				document.getElementById("navCONT").className = "";
			}
			catch(e)
			{
				console.log('Poprvé spuštěno');
			}

		});
		this.route('/favorite', function(){
			this.render('favorite');
			document.getElementById("navHOME").className = "";
			document.getElementById("navFAVO").className = "current";
			document.getElementById("navCART").className = "";
			document.getElementById("navCONT").className = "";
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
			document.getElementById("navHOME").className = "";
			document.getElementById("navFAVO").className = "";
			document.getElementById("navCART").className = "";
			document.getElementById("navCONT").className = "current";
		});
		this.route('/poregistraci', function(){
			this.render('regdone');
			document.getElementById("navHOME").className = "";
			document.getElementById("navFAVO").className = "";
			document.getElementById("navCART").className = "";
			document.getElementById("navCONT").className = "";
		});
		this.route('/:404', function(){
			this.render('404');
			document.getElementById("navHOME").className = "";
			document.getElementById("navFAVO").className = "";
			document.getElementById("navCART").className = "";
			document.getElementById("navCONT").className = "";
		});



	});

}
