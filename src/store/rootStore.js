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
				throw new Error('Something went wrong');
			})
			.then((data) => {
				this.teams = data;
				this.loading = false;
			})
			.catch((error) => {
				window.alert(error);
				this.loading = false;
			});
	}
}

const rootStore = new RootStore();
export default rootStore;
