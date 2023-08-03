export default function TableRowData({items: {type, amount, currency}}) {
	return (
		<>
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
		</>
	);
}