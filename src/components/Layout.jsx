import { PropTypes } from 'mobx-react';

const Layout = ({ teams, loading }) => {
	console.log('loading', loading);
	return loading ? (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				position: 'fixed',
				top: 0,
				left: 0,
				backgroundColor: 'black',
			}}></div>
	) : (
		<ul>
			<h1>Найдено команд: {teams?.length}</h1>
			{teams?.map(({ title }) => (
				<li key={title}>{title}</li>
			))}
		</ul>
	);
};

export default Layout;

Layout.propTypes = {
	teams: PropTypes.array,
	loading: PropTypes.boolean,
};
