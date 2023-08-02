export default function Statistic({ stats, title }) {
	const listItems = stats.map(({ id, label, percentage }) => 
		<li key={id} className="item">
			<span className="label">{label}</span>
			<span className="percentage">{percentage}</span>
		</li>
	);

	// const isTitle = title ? <h2 className="title">{title}</h2> : ''

	return (
		<section className="statistics">
			{/* {isTitle} */}
			{title && <h2 className="title">{title}</h2>}
			<ul className="stat-list">
				{listItems}
			</ul>
		</section>
	);
}