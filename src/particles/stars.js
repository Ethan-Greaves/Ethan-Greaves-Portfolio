import Particles from 'react-particles-js';
import './stars.scss';

const Stars = () => {
	return (
		<Particles
			height='100vw'
			width='100vw'
			params={{
				particles: {
					number: {
						value: 100,
						density: {
							enable: true,
							value_area: 300,
						},
					},
					color: { value: '#ffffff' },
					size: {
						value: 1,
						random: true,
						anim: {
							enable: true,
							speed: 1,
							size_min: 0.2,
							sync: false,
						},
					},
					opacity: {
						value: 0.5,
						random: true,
					},
					lineLinked: {
						enable: false,
					},
					move: {
						enable: true,
						speed: 0.6,
						random: true,
					},
				},
			}}
		/>
	);
};

export default Stars;
