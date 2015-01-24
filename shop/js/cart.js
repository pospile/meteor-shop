Cart = new Mongo.Collection('cart');

Handle_cart = function addToCart(id)
				{
					if(Meteor.user() != null)
					{
						console.log('Přidáno do košíku: ' + id);
						Meteor.call('add_Item', id, Meteor.user());
					}
					else
					{
						console.log('error');
					}
				}
