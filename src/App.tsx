import React from 'react';
import './App.scss';
import Home from './components/home';

const App:React.FC = () => {
	return (
		<div className="App" data-cy='app'>
			<Home/>
		</div>
	);
}

export default App;
