import {gql, useQuery} from "@apollo/client";
import Table, {TableRow, TableCell, TableBody} from "../Table";
import LanguagesPlaceholder from "./LanguagesPlaceholder";
import LanguagesHeader from "./LanguagesHeader";

const GET_LANGUAGES = gql`
  query GetLanguages {
    languages {
      code
      name
      native
    }
  }
`;

interface Language {
  code: string;
  name: string;
  native: string;
}

interface LanguageResult {
  languages: Language[];
}

function Languages() {
  const {loading, data, error} = useQuery<LanguageResult>(GET_LANGUAGES);
  if (error) {
    throw error;
  }
  if (loading) {
    return <LanguagesPlaceholder />;
  }
  return (
    <Table>
      <LanguagesHeader />
      <TableBody>
        {data.languages.map((rate) => (
          <TableRow key={rate.code}>
            <TableCell>{rate.code}</TableCell>
            <TableCell>{rate.name}</TableCell>
            <TableCell>{rate.native}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Languages;
