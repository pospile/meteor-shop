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
							return null;
						}
					}
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
					return Products.find().count() + 1;
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
				}
			}
		)
	}
	catch(e)
	{
		console.log(e);
	}
}
