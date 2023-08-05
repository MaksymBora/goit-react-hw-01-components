import styled from 'styled-components';

export const TransactionTable = styled.table`
  min-width: 700px;
  text-align: center;
  margin-bottom: 50px;
`;

export const TableHeader = styled.thead`
  background-color: aquamarine;
  line-height: 40px;
`;

export const TableRow = styled.tr`
  background-color: #fff;
  line-height: 40px;
  text-transform: capitalize;
  color: #808080;
  background-color: ${({ iseven }) => (iseven ? '#ecf2f4' : '#fff')};
`;
