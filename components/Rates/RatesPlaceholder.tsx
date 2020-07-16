import Table, {TableBody, TableRow, TableCell} from "../Table";
import RatesHeader from "./RatesHeader";

function RatesPlaceholder() {
  return (
    <Table>
      <RatesHeader />
      <TableBody>
        <TableRow>
          <TableCell>...</TableCell>
          <TableCell>...</TableCell>
          <TableCell>...</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default RatesPlaceholder;
