import {TableHead, TableRow, TableCell} from "../Table";

function RatesHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Currency</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Rate</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default RatesHeader;
