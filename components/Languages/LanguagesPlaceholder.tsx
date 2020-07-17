import Table, {TableBody, TableRow, TableCell} from "../Table";
import LanguagesHeader from "./LanguagesHeader";

function RatesPlaceholder() {
  return (
    <Table>
      <LanguagesHeader />
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
