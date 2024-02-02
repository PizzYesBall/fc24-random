import { observer } from 'mobx-react';
import rootStore from './store/rootStore';
import { Loader } from './components/Loader';
import { List } from './components/List';

const App = () => {
	const { teams, loading } = rootStore;

	return loading ? <Loader /> : <List teams={teams} />;
};

export default observer(App);
