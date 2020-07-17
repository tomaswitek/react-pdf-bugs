import {TableHead, TableRow, TableCell} from "../Table";

function LanguagesHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Code</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Native</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default LanguagesHeader;
