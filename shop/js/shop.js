Products = new Mongo.Collection('products');
Categories = new Mongo.Collection('categories');
Alert = new Mongo.Collection('alert');

if (Meteor.isClient)
{
	Session.set('cat', null);
}

if (Meteor.isServer)
{
	Meteor.startup(
		function()
		{
			//Meteor.users.remove({});
			Alert.remove({});
			Cart.remove({});
			Products.remove({});
			Categories.remove({});

			Categories.insert({id: 1, name: 'Střílečky'});
			Categories.insert({id: 2, name: 'RPG'});
			Categories.insert({id: 3, name: 'Adventury'});
			Categories.insert({id: 4, name: 'Multyplayerovky'});

			Products.insert
			(
				{
					product: 'GTA: 5',
					id: 1,
					fav: true,
					cat: 1,
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
					fav: true,
					cat: 2,
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
					fav: true,
					cat: 3,
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
					fav: true,
					cat: 4,
					image: 'gta_v.png',
					price: 800,
					description: 'Další pokračování již dobře známé série se konceptem vrací ke kořenům otevřeného dílu San Andreas, kde jste měli možnost kromě města cestovat také přilehlými oblastmi venkova. Ve hře se ujmete rovnou tří hlavních hrdinů. Michaela, Trevora a Frankieho.'
				}
			);
		}
	);
}
