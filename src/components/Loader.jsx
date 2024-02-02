import '../styles/loader.scss';

export const Loader = () => (
	<div className='loader'>
		<svg
			className='loader__icon'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 48.5 41.8'>
			<path
				fill='#FFFFFF'
				d='M.9-9.5 6.3 0 11.8-9.5Z'
				opacity='0'>
				<animate
					attributeName='opacity'
					dur='0.1s'
					begin='step0.end - 0.3s'
					to='1'
					fill='freeze'
				/>
				<animateTransform
					attributeName='transform'
					attributeType='XML'
					id='step1'
					type='translate'
					to='0 10'
					begin='step0.end - 0.1s'
					dur='0.6s'
					additive='sum'
					fill='freeze'
				/>
				<animateTransform
					attributeName='transform'
					attributeType='XML'
					type='translate'
					to='0 -10'
					begin='step4.end'
					dur='1ms'
					fill='freeze'
				/>
			</path>
			<path
				fill='#FFFFFF'
				d='M12.7-3.7H21.7L25.2-9.8H16.2L17.2-11.5H26.2L29.7-17.5C29.7-17.5 18.8-17.5 16.5-17.5 14-17.5 12.5-15.2 12.5-15.2L7.3-6.3 10.8-.3 12.7-3.7Z'
				opacity='0'>
				<animate
					attributeName='opacity'
					dur='0.1s'
					begin='step1.end - 0.1s'
					to='1'
					fill='freeze'
				/>
				<animateTransform
					attributeName='transform'
					attributeType='XML'
					id='step2'
					type='translate'
					to='0 18'
					begin='step1.end - 0.1s'
					dur='0.6s'
					additive='sum'
					fill='freeze'
				/>
				<animateTransform
					attributeName='transform'
					attributeType='XML'
					type='translate'
					to='0 -18'
					begin='step4.end'
					dur='1ms'
					fill='freeze'
				/>
			</path>
			<path
				fill='#FFFFFF'
				d='M30.7-23.3 24.2-12.1 23.2-13.8 35.2-34.4H37.2L31.7-25H38.6L47.6-40.5C47.6-40.5 36.1-40.5 34.2-40.5 31.8-40.5 30.3-38.2 30.3-38.2S17.6-16.3 17.6-16.3C16.9-15 16.9-12.8 17.6-11.6 17.6-11.6 24.2-.2 24.2-.2L37.6-23.4 30.7-23.3 30.7-23.3Z'
				opacity='0'>
				<animate
					attributeName='opacity'
					dur='0.1s'
					begin='step2.end - 0.1s'
					to='1'
					fill='freeze'
				/>
				<animateTransform
					attributeName='transform'
					attributeType='XML'
					id='step3'
					type='translate'
					to='0 41'
					begin='step2.end - 0.1s'
					dur='0.6s'
					additive='sum'
					fill='freeze'
				/>
				<animateTransform
					attributeName='transform'
					attributeType='XML'
					type='translate'
					to='0 -41'
					begin='step4.end'
					dur='1ms'
					fill='freeze'
				/>
			</path>
			<path
				fill='#000'
				d='M-48.5 0V41.8H0V0z'
				opacity='0'>
				<animate
					attributeName='opacity'
					dur='0.2s'
					begin='step3.end + 1s'
					to='1'
					fill='freeze'
				/>
				<animateTransform
					attributeName='transform'
					attributeType='XML'
					id='step4'
					type='translate'
					to='48.5 0'
					begin='step3.end + 1s'
					dur='0.4s'
					fill='freeze'
				/>
				<animateTransform
					attributeName='transform'
					attributeType='XML'
					type='translate'
					to='-48.5 0'
					begin='step0.end - 0.05s'
					dur='1ms'
					fill='freeze'
				/>
			</path>
			<polyline
				fill='none'
				stroke='#07F468'>
				<animate
					attributeName='points'
					id='step0'
					dur='1.1s'
					begin='0s;step4.end'
					values='0.9,0.5 0.9,0.5 0.9,0.5 0.9,0.5;
					0.9,0.5 24.3,40.8 24.3,40.8 24.3,40.8;
					0.9,0.5 24.3,40.8 47.6,0.5 47.6,0.5;
					0.9,0.5 24.3,40.8 47.6,0.5 0.9,0.5'
				/>
			</polyline>
		</svg>
		<h1 className='loader__title'>
			Loading<span className='loader__dots'>...</span>
		</h1>
	</div>
);
