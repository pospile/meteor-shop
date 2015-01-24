if (Meteor.isClient) {

	Template.products.helpers
	(
		{
			'products': function ()
			{
				return Products.find({fav: true});
			},
			'currentID': function()
			{
				return Session.get('selectedID');
			},
			'renderGameDetail': function()
			{

			}

		}
	);
	Template.products.events
	(
		{
			'click .ided': function(e)
			{
				var selectID = e.target.id;
				Session.set('selectedID', selectID);
				console.log(Session.get('selectedID'));
			},
			'click .carted': function(e)
			{
				var selectID = e.target.id;
				Handle_cart(selectID);
			}
		}
	);
}
