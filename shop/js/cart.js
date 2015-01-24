Cart = new Mongo.Collection('cart');

Handle_cart = function addToCart(id)
				{
					if(Meteor.user() != null)
					{
						console.log('Přidáno do košíku: ' + id);
						Meteor.call('add_Item', id, Meteor.userId());
					}
					else
					{
						showToast('true', 'Musíte být <a data-toggle="modal" data-target="#loginModal">přihlášen</a> / <a data-toggle="modal" data-target="#registerModal">registrován</a>.');
					}
				}
Retrieve_cart = function retrieveCart(token)
				{
					if (token == 'self')
					{
						token = Meteor.userId();
					}
					var items = Cart.find({user: token});
					return items;
				}


if (Meteor.isClient)
{
	Template.cartFill.helpers
	(
		{
			'cartItems': function()
			{
				var content = Retrieve_cart('self').fetch();
				var finalized = [];

				for(var key in content) {
					var element = {}
					var value = content[key];
					var curID = value.product;
					var find = Products.findOne({ id: parseInt(curID)});

					element.id              = find.id;
					element.product         = find.product;
					element.image           = find.image;
					element.price           = find.price;
					element.description     = find.description;
					finalized.push(element);
				}
				return finalized;
			}
		}
	);
	Template.productDetail.events
	(
		{
			'click .addToCart': function(e)
			{
				var selectID = e.target.id;
				Handle_cart(selectID);
			}
		}
	);

	Template.cart.events
	(
		{
			'click .remover': function() { console.log('Clearing cart'); Meteor.call('clear_Cart', Meteor.userId());}
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



