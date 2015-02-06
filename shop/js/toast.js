showToast = function (show, htmlContent)
{
	if (show == 'true')
	{
		$('.notification').hide();
		$('.htmlCont').html(htmlContent);
		$('.notification').stop().fadeIn(400).delay(2000).fadeOut(800);
	}
	else
	{
		$('.notification').hide();
	}
}