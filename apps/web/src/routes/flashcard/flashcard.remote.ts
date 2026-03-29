import { query } from '$app/server';
import * as v from 'valibot';
const PAGE_SIZE = 10;
const data = [
	{
		id: 1,
		front: 'Ag',
		back: 'Neagle',
		image: 'http://dummyimage.com/192x100.png/dddddd/000000'
	},
	{
		id: 2,
		front: 'Brandyn',
		back: 'Heineking',
		image: 'http://dummyimage.com/165x100.png/dddddd/000000'
	},
	{
		id: 3,
		front: 'Gannon',
		back: 'Zipsell',
		image: 'http://dummyimage.com/215x100.png/dddddd/000000'
	},
	{
		id: 4,
		front: 'Jennilee',
		back: 'Earley',
		image: 'http://dummyimage.com/246x100.png/cc0000/ffffff'
	},
	{
		id: 5,
		front: 'Willis',
		back: 'Brunker',
		image: 'http://dummyimage.com/139x100.png/cc0000/ffffff'
	},
	{
		id: 6,
		front: 'Floria',
		back: 'Van den Dael',
		image: 'http://dummyimage.com/165x100.png/5fa2dd/ffffff'
	},
	{
		id: 7,
		front: 'Rosette',
		back: 'Whatson',
		image: 'http://dummyimage.com/109x100.png/dddddd/000000'
	},
	{
		id: 8,
		front: 'Felice',
		back: 'Skurray',
		image: 'http://dummyimage.com/137x100.png/cc0000/ffffff'
	},
	{
		id: 9,
		front: 'Gustaf',
		back: 'Martell',
		image: 'http://dummyimage.com/198x100.png/ff4444/ffffff'
	},
	{
		id: 10,
		front: 'Jonell',
		back: 'Hebson',
		image: 'http://dummyimage.com/222x100.png/dddddd/000000'
	},
	{
		id: 11,
		front: 'Josephina',
		back: 'Pheasant',
		image: 'http://dummyimage.com/245x100.png/ff4444/ffffff'
	},
	{
		id: 12,
		front: 'Elvin',
		back: 'Irlam',
		image: 'http://dummyimage.com/199x100.png/dddddd/000000'
	},
	{
		id: 13,
		front: 'Kyle',
		back: 'Jahndel',
		image: 'http://dummyimage.com/131x100.png/dddddd/000000'
	},
	{
		id: 14,
		front: 'Bryon',
		back: 'Pawel',
		image: 'http://dummyimage.com/153x100.png/dddddd/000000'
	},
	{
		id: 15,
		front: 'Maye',
		back: 'Henbury',
		image: 'http://dummyimage.com/137x100.png/5fa2dd/ffffff'
	},
	{
		id: 16,
		front: 'Sanderson',
		back: 'Fellows',
		image: 'http://dummyimage.com/141x100.png/ff4444/ffffff'
	},
	{
		id: 17,
		front: 'Doti',
		back: 'Offill',
		image: 'http://dummyimage.com/188x100.png/dddddd/000000'
	},
	{
		id: 18,
		front: 'Meridith',
		back: 'Dingwall',
		image: 'http://dummyimage.com/233x100.png/ff4444/ffffff'
	},
	{
		id: 19,
		front: 'Roberta',
		back: 'Hugin',
		image: 'http://dummyimage.com/196x100.png/5fa2dd/ffffff'
	},
	{
		id: 20,
		front: 'Culley',
		back: 'Ilyuchyov',
		image: 'http://dummyimage.com/221x100.png/cc0000/ffffff'
	},
	{
		id: 21,
		front: 'Darrel',
		back: 'Goby',
		image: 'http://dummyimage.com/215x100.png/cc0000/ffffff'
	},
	{
		id: 22,
		front: 'Joscelin',
		back: 'Boast',
		image: 'http://dummyimage.com/246x100.png/5fa2dd/ffffff'
	},
	{
		id: 23,
		front: 'Peterus',
		back: 'Andrys',
		image: 'http://dummyimage.com/154x100.png/ff4444/ffffff'
	},
	{
		id: 24,
		front: 'Billi',
		back: 'Merry',
		image: 'http://dummyimage.com/156x100.png/5fa2dd/ffffff'
	},
	{
		id: 25,
		front: 'Miner',
		back: 'Backler',
		image: 'http://dummyimage.com/232x100.png/ff4444/ffffff'
	},
	{
		id: 26,
		front: 'Brock',
		back: 'Grimmert',
		image: 'http://dummyimage.com/231x100.png/dddddd/000000'
	},
	{
		id: 27,
		front: 'Borden',
		back: 'Pettegree',
		image: 'http://dummyimage.com/226x100.png/5fa2dd/ffffff'
	},
	{
		id: 28,
		front: 'Wilma',
		back: 'Kemetz',
		image: 'http://dummyimage.com/140x100.png/5fa2dd/ffffff'
	},
	{
		id: 29,
		front: 'Violetta',
		back: 'Bewick',
		image: 'http://dummyimage.com/249x100.png/cc0000/ffffff'
	},
	{
		id: 30,
		front: 'Elinore',
		back: 'Chuter',
		image: 'http://dummyimage.com/241x100.png/ff4444/ffffff'
	},
	{
		id: 31,
		front: 'Gillian',
		back: 'Simanek',
		image: 'http://dummyimage.com/239x100.png/5fa2dd/ffffff'
	},
	{
		id: 32,
		front: 'Tamarah',
		back: 'Berens',
		image: 'http://dummyimage.com/169x100.png/cc0000/ffffff'
	},
	{
		id: 33,
		front: 'Felipe',
		back: 'Walls',
		image: 'http://dummyimage.com/153x100.png/dddddd/000000'
	},
	{
		id: 34,
		front: 'Merridie',
		back: 'Christofol',
		image: 'http://dummyimage.com/185x100.png/5fa2dd/ffffff'
	},
	{
		id: 35,
		front: 'Sherye',
		back: 'Struthers',
		image: 'http://dummyimage.com/109x100.png/cc0000/ffffff'
	},
	{
		id: 36,
		front: 'Lorna',
		back: 'Valek',
		image: 'http://dummyimage.com/152x100.png/cc0000/ffffff'
	},
	{
		id: 37,
		front: 'Waverley',
		back: 'Thibodeaux',
		image: 'http://dummyimage.com/137x100.png/cc0000/ffffff'
	},
	{
		id: 38,
		front: 'Sheri',
		back: 'Lombardo',
		image: 'http://dummyimage.com/122x100.png/dddddd/000000'
	},
	{
		id: 39,
		front: 'Town',
		back: 'Cardo',
		image: 'http://dummyimage.com/244x100.png/dddddd/000000'
	},
	{
		id: 40,
		front: 'Cordell',
		back: 'Tiley',
		image: 'http://dummyimage.com/198x100.png/5fa2dd/ffffff'
	},
	{
		id: 41,
		front: 'Odelia',
		back: 'Klaessen',
		image: 'http://dummyimage.com/112x100.png/5fa2dd/ffffff'
	},
	{
		id: 42,
		front: 'Shannan',
		back: 'Gentery',
		image: 'http://dummyimage.com/238x100.png/dddddd/000000'
	},
	{
		id: 43,
		front: 'Benita',
		back: 'Boards',
		image: 'http://dummyimage.com/201x100.png/dddddd/000000'
	},
	{
		id: 44,
		front: 'Timothee',
		back: 'Birks',
		image: 'http://dummyimage.com/213x100.png/cc0000/ffffff'
	},
	{
		id: 45,
		front: 'Krista',
		back: 'Burkill',
		image: 'http://dummyimage.com/157x100.png/ff4444/ffffff'
	},
	{
		id: 46,
		front: 'Meta',
		back: 'Warlow',
		image: 'http://dummyimage.com/119x100.png/5fa2dd/ffffff'
	},
	{
		id: 47,
		front: 'Augustine',
		back: 'Chaulk',
		image: 'http://dummyimage.com/190x100.png/cc0000/ffffff'
	},
	{
		id: 48,
		front: 'Bevan',
		back: 'Burbage',
		image: 'http://dummyimage.com/114x100.png/dddddd/000000'
	},
	{
		id: 49,
		front: 'Onofredo',
		back: 'Benmore',
		image: 'http://dummyimage.com/184x100.png/5fa2dd/ffffff'
	},
	{
		id: 50,
		front: 'Dael',
		back: 'Brockett',
		image: 'http://dummyimage.com/135x100.png/ff4444/ffffff'
	},
	{
		id: 51,
		front: 'Antin',
		back: 'Redan',
		image: 'http://dummyimage.com/236x100.png/cc0000/ffffff'
	},
	{
		id: 52,
		front: 'Eamon',
		back: 'Fey',
		image: 'http://dummyimage.com/191x100.png/ff4444/ffffff'
	},
	{
		id: 53,
		front: 'Atalanta',
		back: 'Weatherell',
		image: 'http://dummyimage.com/229x100.png/5fa2dd/ffffff'
	},
	{
		id: 54,
		front: 'Shirline',
		back: 'Doncom',
		image: 'http://dummyimage.com/122x100.png/ff4444/ffffff'
	},
	{
		id: 55,
		front: 'Gustaf',
		back: 'Catto',
		image: 'http://dummyimage.com/185x100.png/5fa2dd/ffffff'
	},
	{
		id: 56,
		front: 'Albertine',
		back: 'Morman',
		image: 'http://dummyimage.com/170x100.png/cc0000/ffffff'
	},
	{
		id: 57,
		front: 'Patrizia',
		back: 'Tschierasche',
		image: 'http://dummyimage.com/112x100.png/cc0000/ffffff'
	},
	{
		id: 58,
		front: 'Conant',
		back: 'Verrick',
		image: 'http://dummyimage.com/200x100.png/cc0000/ffffff'
	},
	{
		id: 59,
		front: 'Lilah',
		back: 'Peckitt',
		image: 'http://dummyimage.com/214x100.png/dddddd/000000'
	},
	{
		id: 60,
		front: 'Ellary',
		back: 'Munby',
		image: 'http://dummyimage.com/243x100.png/5fa2dd/ffffff'
	},
	{
		id: 61,
		front: 'Philippa',
		back: 'Bentke',
		image: 'http://dummyimage.com/166x100.png/cc0000/ffffff'
	},
	{
		id: 62,
		front: 'Mart',
		back: 'Carnew',
		image: 'http://dummyimage.com/168x100.png/5fa2dd/ffffff'
	},
	{
		id: 63,
		front: 'Terrijo',
		back: 'Szachniewicz',
		image: 'http://dummyimage.com/175x100.png/dddddd/000000'
	},
	{
		id: 64,
		front: 'Bevon',
		back: 'Royston',
		image: 'http://dummyimage.com/173x100.png/5fa2dd/ffffff'
	},
	{
		id: 65,
		front: 'Basil',
		back: 'Betz',
		image: 'http://dummyimage.com/220x100.png/cc0000/ffffff'
	},
	{
		id: 66,
		front: 'Piper',
		back: 'Foxworthy',
		image: 'http://dummyimage.com/187x100.png/5fa2dd/ffffff'
	},
	{
		id: 67,
		front: 'Emiline',
		back: 'Sproston',
		image: 'http://dummyimage.com/214x100.png/cc0000/ffffff'
	},
	{
		id: 68,
		front: 'Cheri',
		back: 'Rubrow',
		image: 'http://dummyimage.com/228x100.png/ff4444/ffffff'
	},
	{
		id: 69,
		front: 'Justino',
		back: 'Boltwood',
		image: 'http://dummyimage.com/200x100.png/5fa2dd/ffffff'
	},
	{
		id: 70,
		front: 'Carter',
		back: 'Coronado',
		image: 'http://dummyimage.com/114x100.png/5fa2dd/ffffff'
	},
	{
		id: 71,
		front: 'Alicia',
		back: 'Poyle',
		image: 'http://dummyimage.com/189x100.png/dddddd/000000'
	},
	{
		id: 72,
		front: 'Neile',
		back: 'Hort',
		image: 'http://dummyimage.com/237x100.png/5fa2dd/ffffff'
	},
	{
		id: 73,
		front: 'Paige',
		back: 'Heijnen',
		image: 'http://dummyimage.com/190x100.png/ff4444/ffffff'
	},
	{
		id: 74,
		front: 'Analise',
		back: 'Sturt',
		image: 'http://dummyimage.com/139x100.png/dddddd/000000'
	},
	{
		id: 75,
		front: 'Donavon',
		back: 'Nobles',
		image: 'http://dummyimage.com/152x100.png/dddddd/000000'
	},
	{
		id: 76,
		front: 'Walt',
		back: 'Heddy',
		image: 'http://dummyimage.com/248x100.png/5fa2dd/ffffff'
	},
	{
		id: 77,
		front: 'Gerrie',
		back: 'Bendare',
		image: 'http://dummyimage.com/128x100.png/ff4444/ffffff'
	},
	{
		id: 78,
		front: 'Isobel',
		back: 'Langlois',
		image: 'http://dummyimage.com/191x100.png/cc0000/ffffff'
	},
	{
		id: 79,
		front: 'Clint',
		back: 'Bullus',
		image: 'http://dummyimage.com/156x100.png/ff4444/ffffff'
	},
	{
		id: 80,
		front: 'Nikolos',
		back: 'Allmark',
		image: 'http://dummyimage.com/210x100.png/ff4444/ffffff'
	},
	{
		id: 81,
		front: 'Sarette',
		back: 'Tremathick',
		image: 'http://dummyimage.com/218x100.png/dddddd/000000'
	},
	{
		id: 82,
		front: 'Ellette',
		back: 'Beetham',
		image: 'http://dummyimage.com/227x100.png/cc0000/ffffff'
	},
	{
		id: 83,
		front: 'Annmaria',
		back: 'Tyce',
		image: 'http://dummyimage.com/172x100.png/dddddd/000000'
	},
	{
		id: 84,
		front: 'Gordon',
		back: 'Ashby',
		image: 'http://dummyimage.com/112x100.png/cc0000/ffffff'
	},
	{
		id: 85,
		front: 'Arlyne',
		back: 'Tropman',
		image: 'http://dummyimage.com/172x100.png/cc0000/ffffff'
	},
	{
		id: 86,
		front: 'Leena',
		back: 'Yorkston',
		image: 'http://dummyimage.com/217x100.png/dddddd/000000'
	},
	{
		id: 87,
		front: 'Rita',
		back: 'Siggers',
		image: 'http://dummyimage.com/131x100.png/cc0000/ffffff'
	},
	{
		id: 88,
		front: 'Germain',
		back: 'Guerrieri',
		image: 'http://dummyimage.com/157x100.png/5fa2dd/ffffff'
	},
	{
		id: 89,
		front: 'Wallace',
		back: 'Peaple',
		image: 'http://dummyimage.com/214x100.png/ff4444/ffffff'
	},
	{
		id: 90,
		front: 'Joycelin',
		back: 'Pylkynyton',
		image: 'http://dummyimage.com/131x100.png/dddddd/000000'
	},
	{
		id: 91,
		front: 'Karly',
		back: 'Poure',
		image: 'http://dummyimage.com/115x100.png/cc0000/ffffff'
	},
	{
		id: 92,
		front: 'Emelda',
		back: 'Tompkinson',
		image: 'http://dummyimage.com/175x100.png/5fa2dd/ffffff'
	},
	{
		id: 93,
		front: 'Karita',
		back: 'Lafoy',
		image: 'http://dummyimage.com/237x100.png/cc0000/ffffff'
	},
	{
		id: 94,
		front: 'Katerina',
		back: 'Orable',
		image: 'http://dummyimage.com/108x100.png/dddddd/000000'
	},
	{
		id: 95,
		front: 'Benedicta',
		back: 'Mottley',
		image: 'http://dummyimage.com/131x100.png/5fa2dd/ffffff'
	},
	{
		id: 96,
		front: 'Elnar',
		back: 'Dand',
		image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff'
	},
	{
		id: 97,
		front: 'Barnard',
		back: 'Sunter',
		image: 'http://dummyimage.com/228x100.png/dddddd/000000'
	},
	{
		id: 98,
		front: 'Laurena',
		back: 'Domenici',
		image: 'http://dummyimage.com/216x100.png/dddddd/000000'
	},
	{
		id: 99,
		front: 'Isaak',
		back: 'Mowsdale',
		image: 'http://dummyimage.com/218x100.png/cc0000/ffffff'
	},
	{
		id: 100,
		front: 'Valeda',
		back: 'Couve',
		image: 'http://dummyimage.com/109x100.png/cc0000/ffffff'
	}
];
export const getFlashCards = query(v.number(), async (page: number) => {
	const start = (page - 1) * PAGE_SIZE;
	const end = start + PAGE_SIZE;

	return {
		cards: data.slice(start, end),
		total: data.length,
		totalPages: Math.ceil(data.length / PAGE_SIZE),
		currentPage: page,
		hasMore: end < data.length
	};
});
