import './App.css';

import React, { Suspense } from 'react';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import useSanityFetchState from './hooks/useSanityFetchState';
import ParticleStars from './particles/stars';

import LandingPage from './components/landingPage/landingPage';
import MetaData from './components/metaData/metaData';
import Scrollbar from './components/scrollbar/scrollbar';

const AboutPage = React.lazy(() => import('./components/aboutPage/aboutPage'));
const Projects = React.lazy(() => import('./components/projects/projects'));
const Footer = React.lazy(() => import('./components/footer/footer'));
const Skills = React.lazy(() => import('./components/skills/skills'));

function App() {
	const [projectData, projectDataIsLoaded] = useSanityFetchState(`*[_type == "project"]{
			title,
			blurb,
			"coverImage": coverImage.asset->url,
			githubLink,
			externalLink,
			created,
			technolgies,
		  }
		  `);

	const [settings, settingsIsLoaded] = useSanityFetchState(`*[_type == "settings"]{
		"primaryColour": primaryColour.value,
		"secondaryColour": secondaryColour.value,
		"metaFavicon": metaFavicon.asset->url,
		metaDescription,
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

	if (settingsIsLoaded && authorDataIsLoaded && projectDataIsLoaded) {
		let theme = createMuiTheme({
			palette: {
				primary: {
					main: settings[0].primaryColour,
				},
				secondary: {
					main: settings[0].secondaryColour,
				},
			},
		});

		theme = responsiveFontSizes(theme);
		theme.typography.h1 = {
			fontSize: '5rem',
		};
		return (
			<main>
				<Suspense fallback={<div>Loading...</div>}>
					<MetaData props={{ ...authorData[0], ...settings[0] }} />
				</Suspense>
				<div>
					<ThemeProvider theme={theme}>
						<Suspense fallback={<div>Loading...</div>}>
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
						</Suspense>
					</ThemeProvider>

					<div id='particles-js'>
						<ParticleStars />
					</div>
				</div>
			</main>
		);
	} else return null;
}

export default App;
