if (Meteor.isClient) {

	Template.loginform.events
	(
		{
			'submit form': function (e)
			{
				e.preventDefault();
				var mail = e.target.mailID.value;
				var pass = e.target.passID.value;

				try
				{
					Meteor.loginWithPassword(mail, pass, function (e)
					{
						if (e == null)
						{
							$('#loginModal').modal('hide');
							$('.notification').hide();
							$('#loader').toggleClass('visible');

							setTimeout(function ()
							{
								$('#loader').toggleClass('visible');
								showToast("true", "Byl jste úspěšně přihlášen jako: <b class='red'>" + Meteor.user().emails[0].address + "</b>");
							}, 2000);
						}
						else
						{
							$('#loginModal').modal('hide');
							$('.notification').hide();
							$('#loader').toggleClass('visible');

							setTimeout(function ()
							{
								$('#loader').toggleClass('visible');
								showToast("true", "CHYBA: Špatný EMAIL nebo HESLO");
							}, 2000);
						}
					});
				}
				catch (e)
				{
					console.log(e);
				}
			}
		}
	)

}
