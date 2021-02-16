import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/landingPage';
import ParticleStars from './particles/stars';
import AboutPage from './components/aboutPage/aboutPage';
import Navbar from './components/navbar/navigationBar';
import Projects from './components/projects/projects';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useSanityFetchState from './hooks/useSanityFetchState';
import Skills from './components/skills/skills';
import { Container } from '@material-ui/core';
import './App.css';

function App() {
	const [projectData, projectDataIsLoaded] = useSanityFetchState(`*[_type == "project"]{
			title,
			blurb,
			"coverImage": coverImage.asset->url,
			githubLink,
		  }
		  `);

	const [theme, themeIsLoaded] = useSanityFetchState(`*[_type == "settings"]{
		"primaryColour": primaryColour.value,
		"secondaryColour": secondaryColour.value,
	  }	  
	  `);

	const [authorData, authorDataIsLoaded] = useSanityFetchState(`*[_type == "author"]{
		name,
		roles,
		"cv": cv.asset->url,
		email,
		"image": image.asset->url,
		bio,
		skills,
	}`);

	if (themeIsLoaded && authorDataIsLoaded && projectDataIsLoaded) {
		return (
			<div>
				<ThemeProvider
					theme={createMuiTheme({
						typography: {
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

					{/* <Route
						render={({ location }) => (
							<TransitionGroup appear={true}>
								<CSSTransition key={location.key} classNames='move-left' timeout={1800}>
									<Switch location={location}>
										<Route exact path='/' render={() => <LandingPage {...authorData[0]} />} />
										<Route
											exact
											path='/projects'
											render={() => <Projects projectData={projectData} />}
										/>
										<Route exact path='/about' render={() => <AboutPage {...authorData[0]} />} />
									</Switch>
								</CSSTransition>
							</TransitionGroup>
						)}
					/> */}

					{/* <Container maxWidth='md'> */}
					<LandingPage {...authorData[0]} />
					<div style={{ backgroundColor: 'rgb(50, 50, 50, 0.5)' }}>
						<Skills skills={authorData[0].skills} />
					</div>
					<div style={{ backgroundColor: 'rgb(0, 0, 0, 0.5)' }}>
						<AboutPage {...authorData[0]} />
					</div>
					<Projects projectData={projectData} />
					{/* </Container> */}
				</ThemeProvider>
				<div id='particles-js'>
					<ParticleStars />
				</div>
			</div>
		);
	} else return null;
}

export default App;
