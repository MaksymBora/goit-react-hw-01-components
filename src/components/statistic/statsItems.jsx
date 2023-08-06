import PropTypes from 'prop-types'
import { Percentage } from './statsItems.style'


export default function StatsItems({ stats: { label, percentage } }) {
	return (
		<>
			<span className="label">{label}</span>
			<Percentage className="percentage">{percentage}</Percentage>
		</>
	);
};


StatsItems.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};