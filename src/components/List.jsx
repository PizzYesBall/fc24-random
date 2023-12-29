import { useEffect, useState } from 'react';
import { Card } from './Card';

export const List = ({ teams }) => {
	const [currentTeams, setCurrentTeams] = useState([]);

	useEffect(() => {
		if (teams?.length) {
			let arr = [];
			let t = [];

			while (arr.length < 3) {
				arr.push(Math.floor(Math.random() * teams.length));
				new Set(arr);
			}

			arr.forEach((idx) => t.push(teams[idx]));
			setCurrentTeams(t);
		}
	}, [teams, teams?.length]);

	return currentTeams.map((team) => <Card team={team} />);
};
