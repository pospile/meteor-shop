if (Meteor.isClient) {

	Template.products.helpers
	(
		{
			'products': function ()
			{
				return Products.find();
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
			}
		}
	)
}
