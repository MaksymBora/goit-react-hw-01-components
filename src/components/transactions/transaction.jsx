import PropTypes from 'prop-types'

export default function TableRowData({ items: { type, amount, currency } }) {
	return (
		<>
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
		</>
	);
}


TableRowData.propTypes = {
  items: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }),
};