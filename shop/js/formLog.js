if (Meteor.isClient) {

	Template.loginform.events
	(
		{
			'submit form': function (e)
			{
				e.preventDefault();
				var mail = e.target.mailID.value;
				var pass = e.target.passID.value;
				Meteor.loginWithPassword(mail, pass, function (e)
				{
					console.log(e);
					$('#loginModal').hide();
					$('.toast').text('Přihlašuji...');
					$('.toast').stop().fadeIn(400).delay(1000).fadeOut(300);

					setTimeout(function (){
						$('#loader').toggleClass('visible');
						setTimeout(function (){
							$('#loader').toggleClass('visible');
						}, 3000);
					}, 1500);

				});
			}
		}
	)

}
