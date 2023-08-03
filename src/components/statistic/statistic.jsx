import StatsItems from "./statsItems";


export default function Statistic({ stats, title }) {
	return (
		<section className="statistics">
			{title && <h2 className="title">{title}</h2>}
			<ul className="stat-list">
				{stats.map(stat  => {
					return (
						<li key={stat.id} className="item">
							<StatsItems stats={stat} />
						</li>);
				}) }
			</ul>
		</section>
	);
}


