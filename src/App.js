//#region IMPORTS
import './App.css';
import React, { Suspense } from 'react';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import useSanityFetchState from './hooks/useSanityFetchState';
import ParticleStars from './particles/stars';
import LandingPage from './components/landingPage/landingPage';
import MetaData from './components/metaData/metaData';
import Scrollbar from './components/scrollbar/scrollbar';

const AboutPage = React.lazy(() => import('./components/sections/aboutPage/aboutPage'));
const Projects = React.lazy(() => import('./components/sections/projects/projects'));
const Footer = React.lazy(() => import('./components/sections/footer/footer'));
const Skills = React.lazy(() => import('./components/sections/skillsSection/skillsSection'));
//#endregion

function App() {
	//#region SANITY DATA
	const [projectData, projectDataIsLoaded] = useSanityFetchState(`*[_type == "project"]{
			title,
			blurb,
			"coverImage": coverImage.asset->url,
			githubLink,
			externalLink,
			created,
			technologies,
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
	//#endregion

	const sanityDataIsLoaded = (settingsIsLoaded, authorDataIsLoaded, projectDataIsLoaded) => {
		return settingsIsLoaded && authorDataIsLoaded && projectDataIsLoaded;
	};

	if (sanityDataIsLoaded(settingsIsLoaded, authorDataIsLoaded, projectDataIsLoaded)) {
		//#region MUI Theme
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
		//#endregion

		const sections = [
			<div id='skills'>
				<Skills skills={authorData[0].skills} />
			</div>,
			<AboutPage {...authorData[0]} />,
			<Projects projectData={projectData} />,
			<Footer {...authorData[0]} />,
		];

		return (
			<main>
				<MetaData props={{ ...authorData[0], ...settings[0] }} />

				<ThemeProvider theme={theme}>
					<Suspense fallback={<div>Loading...</div>}>
						<Scrollbar>
							<LandingPage {...authorData[0]} />
							{sections.map((section, i) => {
								//* If 'i' is an even number
								if (i % 2 === 0)
									return (
										<div key={i} style={{ backgroundColor: 'rgb(50, 50, 50, 0.6)' }}>
											{section}
										</div>
									);

								return (
									<div key={i} style={{ backgroundColor: 'rgb(0, 0, 0, 0.6)' }}>
										{section}
									</div>
								);
							})}
						</Scrollbar>
					</Suspense>
				</ThemeProvider>

				<div id='particles-js'>
					<ParticleStars />
				</div>
			</main>
		);
	} else return null;
}

export default App;
