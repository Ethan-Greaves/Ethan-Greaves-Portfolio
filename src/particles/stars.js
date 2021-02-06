import Particles from 'react-particles-js';

const Stars = () => {
	return (
		<Particles
			height='100vw'
			width='100vw'
			params={{
				particles: {
					number: {
						value: 30,
						density: {
							enable: true,
							value_area: 300,
						},
					},
					color: { value: '#ffffff' },
					size: {
						value: 1.2,
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
						speed: 0.4,
						random: false,
						direction: 'left',
						straight: false,
						out_mode: 'out',
						bounce: false,
					},
				},
			}}
		/>
	);
};

export default Stars;
