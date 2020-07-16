import Table, {TableRow, TableCell} from "../Table";
import RatesHeader from "./RatesHeader";

function RatesPlaceholder() {
  return (
    <Table>
      <RatesHeader />
      <TableRow>
        <TableCell>...</TableCell>
        <TableCell>...</TableCell>
        <TableCell>...</TableCell>
      </TableRow>
    </Table>
  );
}

export default RatesPlaceholder;
