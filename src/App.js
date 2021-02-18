import LandingPage from './components/landingPage/landingPage';
import ParticleStars from './particles/stars';
import AboutPage from './components/aboutPage/aboutPage';
import Projects from './components/projects/projects';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useSanityFetchState from './hooks/useSanityFetchState';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';
import Scrollbar from './components/scrollbar/scrollbar';
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
		"socials": socials[]->{
			platform,
			link,
			"image": image.asset->url,
		}
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
					<Scrollbar>
						<LandingPage {...authorData[0]} />

						<div style={{ backgroundColor: 'rgb(50, 50, 50, 0.6)' }} id='skills'>
							<Skills skills={authorData[0].skills} />
						</div>
						<div style={{ backgroundColor: 'rgb(0, 0, 0, 0.6)' }}>
							<AboutPage {...authorData[0]} />
						</div>
						<div style={{ backgroundColor: 'rgb(50, 50, 50, 0.6)' }}>
							<Projects projectData={projectData} />
						</div>
						<div style={{ backgroundColor: 'rgb(0, 0, 0, 0.6)' }}>
							<Footer {...authorData[0]} />
						</div>
					</Scrollbar>
				</ThemeProvider>

				<div id='particles-js'>
					<ParticleStars />
				</div>
			</div>
		);
	} else return null;
}

export default App;
