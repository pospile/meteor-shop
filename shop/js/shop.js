Products = new Mongo.Collection('products');
Alert = new Mongo.Collection('alert');

if (Meteor.isClient)
{

}

if (Meteor.isServer)
{
	Meteor.startup(
		function()
		{
			//Meteor.users.remove({});
			Alert.remove({});
			Products.remove({});
			Cart.remove({});
			Products.insert
			(
				{
					product: 'GTA: 5',
					id: 1,
					image: 'gta_v.png',
					price: 1200,
					description: 'Další pokračování již dobře známé série se konceptem vrací ke kořenům otevřeného dílu San Andreas, kde jste měli možnost kromě města cestovat také přilehlými oblastmi venkova. Ve hře se ujmete rovnou tří hlavních hrdinů. Michaela, Trevora a Frankieho.'
				}
			);
			Products.insert
			(
				{
					product: 'GTA: 4',
					id: 2,
					image: 'gta_v.png',
					price: 999,
					description: 'Další pokračování již dobře známé série se konceptem vrací ke kořenům otevřeného dílu San Andreas, kde jste měli možnost kromě města cestovat také přilehlými oblastmi venkova. Ve hře se ujmete rovnou tří hlavních hrdinů. Michaela, Trevora a Frankieho.'
				}
			);
			Products.insert
			(
				{
					product: 'GTA: Liberty City',
					id: 3,
					image: 'gta_v.png',
					price: 640,
					description: 'Další pokračování již dobře známé série se konceptem vrací ke kořenům otevřeného dílu San Andreas, kde jste měli možnost kromě města cestovat také přilehlými oblastmi venkova. Ve hře se ujmete rovnou tří hlavních hrdinů. Michaela, Trevora a Frankieho.'
				}
			);
			Products.insert
			(
				{
					product: 'GTA: 2',
					id: 4,
					image: 'gta_v.png',
					price: 800,
					description: 'Další pokračování již dobře známé série se konceptem vrací ke kořenům otevřeného dílu San Andreas, kde jste měli možnost kromě města cestovat také přilehlými oblastmi venkova. Ve hře se ujmete rovnou tří hlavních hrdinů. Michaela, Trevora a Frankieho.'
				}
			);
		}
	);
}
