showToast = function (show, htmlContent)
                     {
						if (show == 'true')
						{
							$('.toast').hide();
							$('.toast').html(htmlContent);
							$('.toast').stop().fadeIn(400).delay(2000).fadeOut(800);
						}
	                    else
						{
							$('.toast').hide();
						}
                     }