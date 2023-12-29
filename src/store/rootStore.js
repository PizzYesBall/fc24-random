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
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				// throw new Error('Something went wrong');
			})
			.then((data) => {
				this.teams = data;
				this.loading = false;
			})
			.catch((error) => {
				setTimeout(() => this.init(), 1000);
			});
		await this.dataEdit();
	}

	dataEdit() {
		this.teams = this.teams.map((el) => ({
			...el,
			country: this.addCountry(el.league),
		}));
	}

	addCountry(league) {
		let country = '';

		switch (league) {
			case 'Premier League':
			case 'EFL Championship':
			case 'EFL League One':
			case 'EFL League Two':
				country = 'Англия';
				break;
			case 'Bundesliga':
			case 'Bundesliga 2':
			case '3. Liga':
				country = 'Германия';
				break;
			case 'LaLiga Santander':
			case 'LaLiga SmartBank':
				country = 'Испания';
				break;
			case 'Ligue 1 Uber Eats':
			case 'Ligue 2 BKT':
				country = 'Франция';
				break;
			case 'Serie A TIM':
			case 'Serie BKT':
				country = 'Италия';
				break;
			case 'Liga Portugal':
				country = 'Португалия';
				break;
			case 'Eredivisie':
				country = 'Нидерланды';
				break;
			case 'Süper Lig':
				country = 'Турция';
				break;
			case 'LPF':
				country = 'Аргентина';
				break;
			case '1A Pro League':
				country = 'Бельгия';
				break;
			case 'cinch Prem':
				country = 'Шотландия';
				break;
			case 'Libertadores':
			case 'Sudamericana':
				country = 'Южная Америка';
				break;
			case 'ROSHN Saudi League':
				country = 'Саудовская Аравия';
				break;
			case 'MLS':
				country = 'США/Канада';
				break;
			case '3F Superliga':
				country = 'Дания';
				break;
			case 'Ö. Bundesliga':
				country = 'Австрия';
				break;
			case 'CSSL ':
				country = 'Швейцария';
				break;
			case 'K League 1':
				country = 'Корея';
				break;
			case 'PKO Ekstraklasa':
				country = 'Польша';
				break;
			case 'CSL':
				country = 'Китай';
				break;
			case 'Eliteserien':
				country = 'Норвегия';
				break;
			case 'Allsvenskan':
				country = 'Швеция';
				break;
			case 'SUPERLIGA':
				country = 'Румыния';
				break;
			case 'A-League':
				country = 'Австралия';
				break;
			case 'SSE Airtricity PD':
				country = 'Ирландия';
				break;
			case 'Hero ISL':
				country = 'Индия';
				break;
			case 'Rest of World':
				country = 'Остальной мир';
				break;
			case "Men's National":
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
