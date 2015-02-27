Admin = new Mongo.Collection('admin');

if (Meteor.isClient)
{
	try
	{
		Template.navbar.helpers
		(
			{
				'admin': function()
				{
					if(Meteor.userId() == Admin.findOne({}).id)
					{
						return '<li class="" id="navADM">				<a href="/admin">ADMIN</a></li>';
					}
					else
					{
						if (Meteor.user())
						{
							return '<li class="" id="navADM">				<a href="/user/'+ Meteor.userId() +'">'+ Meteor.user().emails[0].address +'</a></li>';
						}
						else
						{
							return;
						}
					}
					return;
				}
			}
		)
		Template.admin.helpers
		(
			{
				'users': function()
				{
					var users = Meteor.users.find();
					return users;
				},
				'count': function()
				{
					return Meteor.users.find().count();
				},
				'newID': function()
				{
					return Products.find().count() + 1;
				},
				'prodCount': function()
				{
					return Products.find().count();
				},
				'listCat': function()
				{
					return Categories.find({});
				},
				'listProducts': function()
				{
					return Products.find();
				}
			}
		)
		Template.admin.events
		(
			{
				'click .userExpander': function()
				{
					$('.userExpand').toggle('fast');
				},
				'click .orderExpander': function()
				{
					$('.orderExpand').toggle('fast');
				},
				'click .addExpander': function()
				{
					$('.addExpand').toggle('fast');
				},
				'click .listExpander': function()
				{
					$('.listExpand').toggle('fast');
				},
				'click .remover': function(e)
				{
					var selectID = e.target.id;
					console.log('Mažu produkt #' + selectID);
					Meteor.call('remove_Product', Meteor.userId(), selectID);
				},
				'click .editator': function()
				{
					console.log('Editovat v tuto chvíli může pouze administrátor přes konzoli');
				},
				'submit form': function(e)
				{
					e.preventDefault();
					document.getElementById("submitter").disabled = true;
					showToast("true", "Probíhá publikace hry... Prosím vyčkejte.");
					$('#loader').toggleClass('visible');


					if ($("#gameName").val() != "")
					{
						name = $("#gameName").val();
						console.log('Game name is: ' + name);
					}
					else
					{
						console.log('error with game name');
						setTimeout
						(function()
							{
								document.getElementById("submitter").disabled = false;
								showToast("true", "ERROR: Špatně vyplněný název hry.");
								$('#loader').toggleClass('visible');
							},3000
						);
						return;
					}
					if ($("#distName").val() != "")
					{
						dist = $("#distName").val();
						console.log('Distributor name is: ' + dist);
					}
					else
					{
						console.log('error with distributor value');
						setTimeout
						(function()
							{
								document.getElementById("submitter").disabled = false;
								showToast("true", "ERROR: Špatně vyplněný distributor hry.");
								$('#loader').toggleClass('visible');
							},3000
						);
						return;
					}
					if ($("#priceVal").val() != "")
					{
						price = parseInt($("#priceVal").val());
						console.log('Price of this product is: ' + price);
					}
					else
					{
						console.log('error with price value');
						setTimeout
						(function()
							{
								document.getElementById("submitter").disabled = false;
								showToast("true", "ERROR: Špatně vyplněná cena hry.");
								$('#loader').toggleClass('visible');
							},3000
						);
						return;
					}
					if ($("#imgPath").val() != "")
					{
						imgPath = $("#imgPath").val();
						console.log('Path to product image is: ' + imgPath);
					}
					else
					{
						console.log('error with image path');
						setTimeout
						(function()
							{
								document.getElementById("submitter").disabled = false;
								showToast("true", "ERROR: Špatně vyplněná cesta k obrázku.");
								$('#loader').toggleClass('visible');
							},3000
						);
						return;
					}

					var gameID = $("#gameID").val();
					console.log(gameID);

					var category = $('#selectCat').find(":selected").attr("id");

					if ($("#description").val() != "")
					{
						description = $("#description").val();
						console.log('Product description is: ' + description);
					}
					else
					{
						console.log('error with product description');
						setTimeout
						(function()
							{
								document.getElementById("submitter").disabled = false;
								showToast("true", "ERROR: Špatně vyplněný popis produktu.");
								$('#loader').toggleClass('visible');
							},3000
						);
						return;
					}

					Meteor.call('add_Product', Meteor.userId(), name, gameID, category, imgPath, price, description);
					setTimeout
					(function()
						{
							document.getElementById("submitter").disabled = false;
							$('#loader').toggleClass('visible');
							showToast("true", "Paráda! Hra: " + name + " byla právě přidána do systému!");
						},3000
					);

				}
			}
		)
	}
	catch(e)
	{
		console.log(e);
	}
}
