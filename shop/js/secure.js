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
				}
			}
		}
	)


}