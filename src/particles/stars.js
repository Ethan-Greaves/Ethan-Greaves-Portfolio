import Particles from 'react-particles-js';
import './stars.scss';

const Stars = () => {
	return (
		<div
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
			}}
		>
			<Particles
				className='particles'
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
							speed: 0.3,
						},
					},
				}}
			/>
		</div>
	);
};

export default Stars;
