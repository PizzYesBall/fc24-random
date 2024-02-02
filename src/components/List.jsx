import '../styles/button.scss';
import '../styles/list.scss';

import { useState } from 'react';
import { Card } from './Card';

const LIMIT = 3;

export const List = ({ teams }) => {
	const [currentTeams, setCurrentTeams] = useState([]);
	const [count, setCount] = useState(0);

	const shuffle = () => {
		let arr = [];
		let t = [];

		while (arr.length < 3) {
			arr.push(Math.floor(Math.random() * teams.length));
			new Set(arr);
		}

		arr.forEach((idx) => t.push(teams[idx]));
		setCurrentTeams(t);
		setCount(count + 1);
	};

	const restart = () => {
		setCount(0);
		setCurrentTeams([]);
	};

	return (
		<div className='list'>
			<div className='list__header'>
				<h2 className='list__counter'>
					Попыток {count}/{LIMIT}
				</h2>

				{count === LIMIT ? (
					<button
						className='button'
						onClick={restart}>
						По новой давай
					</button>
				) : (
					<button
						className='button'
						onClick={shuffle}>
						Перемешать
					</button>
				)}
			</div>
			<ul className='list__list'>
				{currentTeams.map((team) => (
					<Card
						team={team}
						count={LIMIT}
					/>
				))}
			</ul>
		</div>
	);
};
