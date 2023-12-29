const { default: axios } = require('axios');
const { Router } = require('express');
const { JSDOM } = require('jsdom');
const router = Router();

router.get('/data', async (req, res) => {
	const kek = await getContent();

	res.status(200).json(kek);
});

module.exports = router;

const baseUrl = `https://www.fifaindex.com/teams/`;

const getContent = async () => {
	let lastPage = 23;
	let data = [];

	for (let i = 1; i <= lastPage; i++) {
		const arr = await request(i);
		data.push(arr);
	}

	return data.flat();
};

const request = (page, type) =>
	axios
		.get(baseUrl, {
			params: {
				page,
				type,
			},
		})
		.then((response) => {
			const page = new JSDOM(response.data);
			return parser(page);
		});

const parser = (page) => {
	const table = page.window.document.querySelector('.table tbody');
	const tr = Array.from(table.getElementsByTagName('tr')).filter(
		(tr) => !tr.classList.contains('d-block') && tr.childElementCount > 1
	);

	return tr.map((team) => {
		const logo = team.querySelector('.link-team img').src;
		const title = team.querySelector(
			'[data-title="Name"] .link-team'
		).textContent;
		const league = team.querySelector('.link-league').textContent;
		const stars = team.querySelector('.star').innerHTML;
		const stat = {
			attack: team.querySelector('[data-title="ATT"]').innerHTML,
			midfield: team.querySelector('[data-title="MID"]').innerHTML,
			defence: team.querySelector('[data-title="DEF"]').innerHTML,
			all: team.querySelector('[data-title="OVR"] span').innerHTML,
		};

		return {
			logo,
			title,
			league,
			stars,
			stat,
		};
	});
};
