import '../styles/card.scss';

export const Card = ({ team, count }) => {
	const { logo, title, league, stars, country, stat } = team;
	// const { attack, midfield, defence, all } = stat;
	return (
		<li
			className='card'
			style={{
				height: `calc(95% / ${count})`,
			}}>
			<div className='card__img'>
				<img
					src={logo}
					alt={title}
				/>
				<div
					className='card__stat'
					dangerouslySetInnerHTML={{
						__html: `${stat?.attack} ${stat?.midfield} ${stat?.defence}`,
					}}></div>
			</div>
			<div className='card__inner'>
				<h3>{country}</h3>
				<h4>{league}</h4>
				<h2>{title}</h2>
				<span>
					{stat?.all}
					<span
						className='badge-all'
						dangerouslySetInnerHTML={{
							__html: stars,
						}}></span>
				</span>
			</div>
		</li>
	);
};
