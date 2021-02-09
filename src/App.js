import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/landingPage';
import ParticleStars from './particles/stars';
import Navbar from './components/navbar/navigationBar';
import Projects from './components/projects/projects';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useSanityFetchState from './hooks/useSanityFetchState';
import './App.css';

//const theme = createMuiTheme({});

function App() {
	const [theme, themeIsLoaded] = useSanityFetchState(`*[_type == "settings"]{
		"primaryColour": primaryColour.value,
		"secondaryColour": secondaryColour.value,
	  }	  
	  `);

	if (themeIsLoaded) {
		return (
			<div>
				<div style={{ position: 'fixed' }}>
					<ParticleStars />
				</div>

				<div style={{ position: 'relative', zIndex: 2 }}>
					<ThemeProvider
						theme={createMuiTheme({
							typography: {
								//fontFamily: ['Montserrat', 'sans-serif'].join(','),
								fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
								fontSize: 16,
							},
							palette: {
								primary: {
									main: theme[0].primaryColour,
								},
								secondary: {
									main: theme[0].secondaryColour,
								},
							},
						})}
					>
						<Navbar />
						<Route
							render={({ location }) => (
								<TransitionGroup appear={true}>
									<CSSTransition key={location.key} classNames='fade' timeout={1000}>
										<Switch location={location}>
											<Route exact path='/' render={() => <LandingPage />} />
											<Route exact path='/projects' render={() => <Projects />} />
										</Switch>
									</CSSTransition>
								</TransitionGroup>
							)}
						/>
					</ThemeProvider>
				</div>
			</div>
		);
	} else return null;
}

export default App;
