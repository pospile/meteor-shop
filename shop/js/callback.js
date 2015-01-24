if (Meteor.isClient) {


	Template.home.rendered = function ()
	{
		document.getElementById("navHOME").className = "current";
		document.getElementById("navFAVO").className = "";
		document.getElementById("navCART").className = "";
		document.getElementById("navCONT").className = "";
	}
	Template.shop.rendered = function ()
	{
		document.getElementById("navHOME").className = "";
		document.getElementById("navFAVO").className = "current";
		document.getElementById("navCART").className = "";
		document.getElementById("navCONT").className = "";
	}
	Template.contact.rendered = function ()
	{
		document.getElementById("navHOME").className = "";
		document.getElementById("navFAVO").className = "";
		document.getElementById("navCART").className = "";
		document.getElementById("navCONT").className = "current";
	}
	Template.error404.rendered = function ()
	{
		document.getElementById("navHOME").className = "";
		document.getElementById("navFAVO").className = "";
		document.getElementById("navCART").className = "";
		document.getElementById("navCONT").className = "";
	}
}


