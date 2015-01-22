if (Meteor.isClient) {

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


				if (Honeypot.isHuman(form))
				{
					Honeypot.removeHoneypotFields(form);
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
								console.log('Success...');
								$('#loader').toggleClass('visible');
								$('#registerModal').hide();
								Meteor.call('create_Acc', mail, pass);
								Router.go('/poregistraci');
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
				else
					{
					console.log('Error...');
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
