import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/landingPage';
import ParticleStars from './particles/stars';
import Navbar from './components/navbar/navigationBar';
import Projects from './components/projects/projects';
import './App.css';

function App() {
	return (
		<div>
			<div style={{ position: 'fixed' }}>
				<ParticleStars />
			</div>
			<div style={{ position: 'relative', zIndex: 2 }}>
				<Navbar />
				<Switch>
					<Route exact path='/' render={() => <LandingPage />} />
					<Route exact path='/projects' render={() => <Projects />} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
