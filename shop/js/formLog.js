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
						$('#loginModal').hide();
						$('.toast').hide();
						$('#loader').toggleClass('visible');

						setTimeout(function ()
						{
							$('#loader').toggleClass('visible');
							$('.toast').text('Byl jste úspěšně přihlášen');
							$('.toast').stop().fadeIn(400).delay(1000).fadeOut(300);
						}, 2000);
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
