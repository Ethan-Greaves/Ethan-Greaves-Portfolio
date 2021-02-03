import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/landingPage';

function App() {
	return (
		<Switch>
			<Route exact path='/' render={() => <LandingPage />} />
		</Switch>
	);
}

export default App;
