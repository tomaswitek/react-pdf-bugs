import {TableRow, TableCell} from "../Table";

function RatesHeader() {
  return (
    <TableRow>
      <TableCell>Currency</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Rate</TableCell>
    </TableRow>
  );
}

export default RatesHeader;
