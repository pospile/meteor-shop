if (Meteor.isClient) {

	function generateToken()
	{
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";

		for( var i=0; i < 8; i++ )
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		return text;
	}

	function waitForRegister(token) {
		var log = Alert.findOne({tok: token});


		if (log.user == 'false')
		{
			clearInterval(interval);
			console.log('Error: Uživatel již existuje');
			$('#loader').toggleClass('visible');
			showToast("true", "CHYBA: Tento email je již zaregistrován");
			$("#submiter").prop('disabled', false);
			$('#registerModal').modal('show');
		}
		else
		{
			clearInterval(interval);
			console.log('Final log: ' + log.user);
			setTimeout(function(){redirectSuccess();},3000);
		}


	}


	function redirectSuccess()
	{
		showToast("true", "Registrace dokončena! <a data-toggle='modal' data-target='#loginModal'>Přihlásit se!</a>");
		$('#loader').toggleClass('visible');
		$('#loginModal').modal('show');
	}

	Template.registerform.events
	(
		{
			'submit form': function(e)
			{
				var form = this;
				e.preventDefault();
				e.target.submiter.disabled = true;


				var mail = e.target.mailID.value;
				var pass = e.target.passID.value;
				var pass2 = e.target.passID2.value;

				console.log(mail);
				console.log(pass);
				console.log(pass2);



					if(mail == '' || pass == '' || pass2 == '')
					{
						ShowError('Žádné pole nesmí být prázdné');
						e.target.submiter.disabled = false;
					}
					else
					{
						if (pass == pass2)
						{
							if(pass.length >= 6)
							{
								var tok = generateToken();
								console.log('Success...');
								$('#loader').toggleClass('visible');
								$('#registerModal').modal('hide');
								Meteor.call('create_Acc', mail, pass, tok);
								Session.set('token', tok);
								interval = setInterval(function () {waitForRegister(tok)}, 1000);
							}
							else
							{
								ShowError('Heslo je příliš krátké.');
								e.target.submiter.disabled = false;
							}
						}
						else
						{
							ShowError('Hesla se neschodují.');
							e.target.submiter.disabled = false;
						}
					}
			}
		}
	);
	function ShowError(error)
	{
		$('#errorReg').show();
		$('#errorRegVal').text(error);
	}
}
