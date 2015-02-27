if (Meteor.isClient) {


	Template.home.rendered = function ()
	{
		$('.version').text('1.2.0');
		document.getElementById("navHOME").className = "current";
		document.getElementById("navFAVO").className = "";
		document.getElementById("navCART").className = "";
		document.getElementById("navCONT").className = "";
		if(Meteor.userId() == Admin.findOne({}).id)
		{
			document.getElementById("navADM").className = "";
		}
	}
	Template.shop.rendered = function ()
	{
		document.getElementById("navHOME").className = "";
		document.getElementById("navFAVO").className = "current";
		document.getElementById("navCART").className = "";
		document.getElementById("navCONT").className = "";
		document.getElementById("navADM").className = "";
	}
	Template.contact.rendered = function ()
	{
		document.getElementById("navHOME").className = "";
		document.getElementById("navFAVO").className = "";
		document.getElementById("navCART").className = "";
		document.getElementById("navCONT").className = "current";
		document.getElementById("navADM").className = "";
	}
	Template.error404.rendered = function ()
	{
		document.getElementById("navHOME").className = "";
		document.getElementById("navFAVO").className = "";
		document.getElementById("navCART").className = "";
		document.getElementById("navCONT").className = "";
		document.getElementById("navADM").className = "";
	}
	Template.admin.rendered = function ()
	{
		document.getElementById("navHOME").className = "";
		document.getElementById("navFAVO").className = "";
		document.getElementById("navCART").className = "";
		document.getElementById("navCONT").className = "";
		document.getElementById("navADM").className = "current";
	}
}
