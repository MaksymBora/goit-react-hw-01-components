function TableRowData({ transactionsData }) {
	return (transactionsData.map(({ id, type, amount, currency }) => 
		<tr key={id} className="transaction-row">
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
		</tr>
	));
}



export default function TransactionHistory({ transactionsItems }) {
	return (
	<table className="transaction-history">
		<thead className="transaction-header">
			<tr>
				<th>Type</th>
				<th>Amount</th>
				<th>Currency</th>
			</tr>
		</thead>

		<tbody>
			<TableRowData transactionsData={transactionsItems} />
		</tbody>
	</table>
	);
}