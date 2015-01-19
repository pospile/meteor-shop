(function(){Products = new Mongo.Collection('products');

if (Meteor.isClient)
{

}

if (Meteor.isServer)
{
	Meteor.startup(
		function()
		{
			Products.remove({});
			Products.insert
			(
				{
					product: 'GTA: 5',
					id: 1,
					image: 'default.png',
					price: 1200,
					description: 'Další pokračování již dobře známé série se konceptem vrací ke kořenům otevřeného dílu San Andreas, kde jste měli možnost kromě města cestovat také přilehlými oblastmi venkova. Ve hře se ujmete rovnou tří hlavních hrdinů. Michaela, Trevora a Frankieho.'
				}
			);
			Products.insert
			(
				{
					product: 'GTA: 4',
					id: 2,
					image: 'default.png',
					price: 999,
					description: 'Další pokračování již dobře známé série se konceptem vrací ke kořenům otevřeného dílu San Andreas, kde jste měli možnost kromě města cestovat také přilehlými oblastmi venkova. Ve hře se ujmete rovnou tří hlavních hrdinů. Michaela, Trevora a Frankieho.'
				}
			);
			Products.insert
			(
				{
					product: 'GTA: Liberty City',
					id: 3,
					image: 'default.png',
					price: 640,
					description: 'Další pokračování již dobře známé série se konceptem vrací ke kořenům otevřeného dílu San Andreas, kde jste měli možnost kromě města cestovat také přilehlými oblastmi venkova. Ve hře se ujmete rovnou tří hlavních hrdinů. Michaela, Trevora a Frankieho.'
				}
			);
			Products.insert
			(
				{
					product: 'GTA: 2',
					id: 4,
					image: 'default.png',
					price: 800,
					description: 'Další pokračování již dobře známé série se konceptem vrací ke kořenům otevřeného dílu San Andreas, kde jste měli možnost kromě města cestovat také přilehlými oblastmi venkova. Ve hře se ujmete rovnou tří hlavních hrdinů. Michaela, Trevora a Frankieho.'
				}
			);
		}
	);
}

})();
