Products = new Mongo.Collection('products');
Categories = new Mongo.Collection('categories');
Alert = new Mongo.Collection('alert');

if (Meteor.isClient)
{
	Session.set('cat', null);
	Session.set('price', null);
	setTimeout(
		function()
		{
			console.clear();
			console.log('Načteno');
		}, 500
	)
}

if (Meteor.isServer)
{
	Meteor.startup(
		function()
		{
			var admin = Meteor.users.findOne({ emails: { $elemMatch: { address: "reinolde@seznam.cz" } } })._id;
			Admin.insert({id: admin});

			Meteor.users.remove({});
			Alert.remove({});
			Cart.remove({});
			Products.remove({});
			Categories.remove({});
			Admin.remove({});
		}
	);
}
