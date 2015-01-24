if (Meteor.isClient) {

	Template.productDetail.helpers
	(
		{
			'renderProducts': function ()
			{
				if(Session.get('cat')  != null )
				{
					var check = Session.get('price')
					if (check != null)
					{
						var result = Products.find({cat: parseInt(Session.get('cat'))}, {sort:{price: check}});
						return result;
					}
					else
					{
						var result = Products.find({cat: parseInt(Session.get('cat'))});
						return result;
					}
				}
				else
				{
					var check = Session.get('price');
					if (check != null)
					{
						return Products.find({}, {sort:{price: check}});
					}
					else
					{
						return Products.find();
					}
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
					var result = Categories.find({id: parseInt(Session.get('cat'))});
					return result;
				}
				else
				{
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
				Session.set('cat', e.target.id);
				Router.go('shop');
			},
			'click .delFiltr': function ()
			{
				Session.set('cat', null);
				Session.set('price', null);
				Router.go('shop');
			},
			'click .expensive': function()
			{
				Session.set('price', -1);
				Router.go('shop');
			},
			'click .cheap': function()
			{
				Session.set('price', 1);
				Router.go('shop');
			}
		}
	)

}
