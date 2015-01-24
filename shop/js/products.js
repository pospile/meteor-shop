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
}
