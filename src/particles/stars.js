import Particles from 'react-particles-js';

const Stars = () => {
	return (
		<Particles
			params={{
				particles: {
					number: {
						value: 100,
						density: {
							enable: true,
							value_area: 500,
						},
					},
					color: { value: '#FFFFFF' },
					size: {
						value: 1.3,
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
						speed: 2,
						random: false,
						direction: 'right',
						straight: true,
						out_mode: 'out',
						bounce: false,
					},
				},
			}}
		/>
	);
};

export default Stars;
