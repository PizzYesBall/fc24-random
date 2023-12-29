import { PropTypes } from 'mobx-react';
import { Loader } from './Loader';
import { List } from './List';

const Layout = ({ teams, loading }) =>
	loading ? (
		<Loader />
	) : (
		<div>
			<h1>Найдено команд: {teams?.length}</h1>
			<List teams={teams} />
		</div>
	);

export default Layout;

Layout.propTypes = {
	teams: PropTypes.array,
	loading: PropTypes.boolean,
};
