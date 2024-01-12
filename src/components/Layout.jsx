import { PropTypes } from 'mobx-react';
import { Loader } from './Loader';
import { List } from './List';

const Layout = ({ teams, loading }) =>
	loading ? <Loader /> : <List teams={teams} />;

export default Layout;

Layout.propTypes = {
	teams: PropTypes.array,
	loading: PropTypes.boolean,
};
