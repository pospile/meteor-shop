if (Meteor.isClient) {

	Template.productDetail.helpers
	(
		{
			'renderProducts': function ()
			{
				if(Session.get('cat')  != null )
				{
					console.log(Session.get('cat'));
					var result = Products.find({cat: parseInt(Session.get('cat'))});
					return result;
				}
				else
				{
					return Products.find({});
				}
			}
		}
	);

	Template.shop.helpers
	(
		{
			'listCat': function()
			{
				if(Session.get('cat')  != null )
				{
					console.log(Session.get('cat'));
					var result = Categories.find({id: parseInt(Session.get('cat'))});
					return result;
				}
				else
				{
					console.log(Session.get('cat'));
					return Categories.find({});
				}
			}
		}
	);
	Template.shop.events
	(
		{
			'click .chooseCat': function(e)
			{
				console.log('clicknuto');
				Session.set('cat', e.target.id);
				Router.go('shop');
			},
			'click .delFiltr': function ()
			{
				Session.set('cat', null);
				Router.go('shop');
			}
		}
	)

}
