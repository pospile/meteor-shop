if (Meteor.isClient) {


	Template.contact.helpers(
		{
			'me': function ()
			{
				return 'pospile';
			},
			'mail': function ()
			{
				return 'reinolde@seznam.cz';
			},
			'token': function()
			{
				return generateToken();
			}
		}
	);

	function generateToken()
	{
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";

		for( var i=0; i < 8; i++ )
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		return text;
	}
}
