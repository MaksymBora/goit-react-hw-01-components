export default function StatsItems({stats: {label, percentage}}) {
	return (
		<>
			<span className="label">{label}</span>
			<span className="percentage">{percentage}</span>
		</>
	);
};