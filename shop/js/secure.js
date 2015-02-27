if (Meteor.isServer) {
	Meteor.methods
	(
		{
			'create_Acc': function (mail, pass, token)
			{
				if (Meteor.users.find({ emails: { $elemMatch: { address: mail } } }).fetch() == '')
				{
					console.log('Registrace přijate. ' + mail + ' ' + pass);
					var id = Accounts.createUser({email: mail, password: pass});
					console.log(id);
					console.log(token);
					Alert.insert({tok: token, user: id});
				}
				else
				{
					console.log('Pokus o registraci existujícího uživatele.')
					Alert.insert({tok: token, user: 'false'});
				}
			},
			'add_Item': function (id, token)
			{
				var check = Cart.findOne({product: id, user: token});
				if (check != null)
				{
					console.log('Tento produkt v košíku již je.');
				}
				else
				{
					Cart.insert({product: id, user: token});
				}
			},
			'clear_Cart': function (token)
			{
				Cart.remove({user: token});
			},
			'remove_Product': function (token, receivedID)
			{
				if (token == Admin.findOne({}).id)
				{
					console.log('Mažu produkt: ' + parseInt(receivedID));
					Products.remove({id: parseInt(receivedID)});
				}
				else
				{
					console.log('Pokus o nabourání do systému!' + token);
				}
			},
			'add_Product': function(token, nameREC, idREC, catREC, imageREC, priceREC, descriptionREC)
			{
				if (token == Admin.findOne({}).id)
				{
					try
					{
						console.log('Vkládám do systému hru: ' + nameREC + ' with id: ' + idREC);
						console.log(token + ' / ' + nameREC +' '+ idREC + ' / ' + catREC + ' / ' + imageREC + ' / ' + priceREC + ' / ' + descriptionREC);
						Products.insert
						(
							{
								product: nameREC,
								id: idREC,
								fav: false,
								cat: catREC,
								image: imageREC,
								price: priceREC,
								description: descriptionREC
							}
						);
					}
					catch (e)
					{
						console.log(e);
					}
				}
				else
				{
					console.log('Pokus o nabourání do systému!' + token);
				}
			}
		}
	)
}