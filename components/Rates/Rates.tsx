import {gql, useQuery} from "@apollo/client";
import Table, {TableRow, TableCell, TableBody} from "../Table";
import RatesPlaceholder from "./RatesPlaceholder";
import RatesHeader from "./RatesHeader";

const GET_RATES = gql`
  query GetRates {
    languages {
      code
      name
      native
    }
  }
`;

interface RatesProps {
  currency: string;
}

interface Rate {
  code: string;
  name: string;
  native: string;
}

interface RateResult {
  languages: Rate[];
}

function Rates({currency}: RatesProps) {
  const {loading, data, error} = useQuery<RateResult>(GET_RATES);
  if (error) {
    throw error;
  }
  if (loading) {
    return <RatesPlaceholder />;
  }
  return (
    <Table>
      <RatesHeader />
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

export default Rates;
