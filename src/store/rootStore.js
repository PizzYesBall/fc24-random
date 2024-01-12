import { makeAutoObservable } from 'mobx';

class RootStore {
	loading = true;
	teams = [];

	constructor() {
		makeAutoObservable(this);
		this.init();
	}

	async init() {
		await fetch('http://localhost:4000/data')
			.then((response) => response.json())
			.then((data) => {
				this.dataEdit(data);
				this.loading = false;
			})
			.catch((error) => {
				setTimeout(() => this.init(), 1000);
			});
	}

	dataEdit(data) {
		this.teams = data.filter(
			({ league }) => league !== 'Free Agents League'
		);
		this.teams = this.teams.map((el) => ({
			...el,
			country: this.addCountry(el.league),
		}));
	}

	addCountry(league) {
		let country = '';

		switch (league) {
			case 'England Premier League (1)':
			case 'England Championship (2)':
			case 'England League One (3)':
			case 'England League Two (4)':
				country = 'Англия';
				break;
			case 'Germany 1. Bundesliga (1)':
			case 'Germany 2. Bundesliga (2)':
			case 'Germany 3. Liga (3)':
				country = 'Германия';
				break;
			case 'Spain Primera Divisi처n (1)':
			case 'Spain Segunda Divisi처n (2)':
				country = 'Испания';
				break;
			case 'France Ligue 1 (1)':
			case 'France Ligue 2 (2)':
				country = 'Франция';
				break;
			case 'Italy Serie A (1)':
			case 'Italy Serie B (2)':
				country = 'Италия';
				break;
			case 'Portugal Primeira Liga (1)':
				country = 'Португалия';
				break;
			case 'Holland Eredivisie (1)':
				country = 'Нидерланды';
				break;
			case 'Turkey S체per Lig (1)':
				country = 'Турция';
				break;
			case 'Argentina Primera Divisi처n (1)':
				country = 'Аргентина';
				break;
			case 'Belgium Pro League (1)':
				country = 'Бельгия';
				break;
			case 'Scotland Premiership (1)':
				country = 'Шотландия';
				break;
			case 'CONMEBOL Libertadores':
			case 'CONMEBOL Sudamericana':
				country = 'Южная Америка';
				break;
			case 'Saudi Pro League (1)':
				country = 'Саудовская Аравия';
				break;
			case 'USA Major League Soccer (1)':
				country = 'США/Канада';
				break;
			case 'Denmark Superliga (1)':
				country = 'Дания';
				break;
			case 'Austria Bundesliga (1)':
				country = 'Австрия';
				break;
			case 'Switzerland Super League (1)':
				country = 'Швейцария';
				break;
			case 'Korea K League 1 (1)':
				country = 'Корея';
				break;
			case 'Poland Ekstraklasa (1)':
				country = 'Польша';
				break;
			case 'China Super League (1)':
				country = 'Китай';
				break;
			case 'Norway Eliteserien (1)':
				country = 'Норвегия';
				break;
			case 'Sweden Allsvenskan (1)':
				country = 'Швеция';
				break;
			case 'Romania Liga I (1)':
				country = 'Румыния';
				break;
			case 'Australia A-League (1)':
				country = 'Австралия';
				break;
			case 'Rep. Ireland Premier Division (1)':
				country = 'Ирландия';
				break;
			case 'Indian Super League (1)':
				country = 'Индия';
				break;
			case 'Rest of World':
				country = 'Остальной мир';
				break;
			case 'International':
				country = 'Сборные';
				break;
			default:
				country = 'Нет на глобусе';
		}

		return country;
	}
}

const rootStore = new RootStore();
export default rootStore;
