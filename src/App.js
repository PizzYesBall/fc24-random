import { observer } from 'mobx-react';
import Layout from './components/Layout';
import rootStore from './store/rootStore';

const App = () => {
	const { teams, loading } = rootStore;

	return (
		<Layout
			teams={teams}
			loading={loading}
		/>
	);
};

export default observer(App);
