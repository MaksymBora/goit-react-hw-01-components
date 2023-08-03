import TableRowData from "./transAction";


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
				{transactionsItems.map(transactionsItem => {
					return (
						<tr key={transactionsItem.id} className="transaction-row">
							<TableRowData items={transactionsItem} />
						</tr>
					);
				})}
			
		</tbody>
	</table>
	);
}