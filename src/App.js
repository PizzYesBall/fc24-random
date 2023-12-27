import './App.css';

import { observer } from 'mobx-react';
import Layout from './components/Layout';
import rootStore from './store/rootStore';

const App = () => {
	console.log('rootStore', rootStore);

	return (
		<div className='App'>
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
			<Layout
				teams={rootStore?.teams}
				loading={rootStore?.loading}
			/>
		</div>
	);
};

export default observer(App);
