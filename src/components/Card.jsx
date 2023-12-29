export const Card = ({ team }) => {
	const { logo, title, league, stars, country, stat } = team;
	// const { attack, midfield, defence, all } = stat;
	return (
		<div class='team'>
			<div class='team__img'>
				<img
					src={logo}
					alt={title}
				/>
				<div
					class='team__stat'
					dangerouslySetInnerHTML={{
						__html: `${stat?.attack} ${stat?.midfield} ${stat?.defence}`,
					}}></div>
			</div>
			<div class='team__inner'>
				<h3>{country}</h3>
				<h4>{league}</h4>
				<h2>{title}</h2>
				<span>
					<span
						class='badge-all'
						dangerouslySetInnerHTML={{
							__html: stars,
						}}></span>
					{stat?.all}
				</span>
			</div>
		</div>
	);
};
