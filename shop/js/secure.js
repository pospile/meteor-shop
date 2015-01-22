if (Meteor.isServer) {

	Meteor.methods
	(
		{
			'create_Acc': function (mail, pass)
			{
				console.log('Registrace přijate. ' + mail + pass);
				Accounts.createUser
				(
					{email: mail, password: pass},

						function afterReg(e)
						{
							if (e == '')
							{
								console.log('succes');
							}
							else
							{
								console.log('error ' + e);
							}
						}
				);
			}
		}
	)


}