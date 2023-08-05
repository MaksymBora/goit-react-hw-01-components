import TableRowData from "./transaction";
import {TransactionTable, TableHeader, TableRow} from './transactionHist.style'




export default function TransactionHistory({ transactionsItems }) {
	return (
	<TransactionTable className="transaction-history">
		<TableHeader className="transaction-header">
			<tr>
				<th>Type</th>
				<th>Amount</th>
				<th>Currency</th>
			</tr>
		</TableHeader>

			<tbody>
				{transactionsItems.map((transactionsItem, index) => {
					const isEvenRow = index % 2 === 0;
					return (
						<TableRow key={transactionsItem.id} className="transaction-row" $iseven={isEvenRow}>
							<TableRowData items={transactionsItem} />
						</TableRow>
					);
				})}
			
		</tbody>
	</TransactionTable>
	);
}