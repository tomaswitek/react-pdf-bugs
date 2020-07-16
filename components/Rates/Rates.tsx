import {gql, useQuery} from "@apollo/client";
import Table, {TableRow, TableCell} from "../Table";
import RatesPlaceholder from "./RatesPlaceholder";
import RatesHeader from "./RatesHeader";

const GET_RATES = gql`
  query GetRates($currency: String!) {
    rates(currency: $currency) {
      currency
      name
      rate
    }
  }
`;

interface RatesProps {
  currency: string;
}

interface Rate {
  currency: string;
  name: string;
  rate: number;
}

interface RateResult {
  rates: Rate[];
}

function Rates({currency}: RatesProps) {
  const {loading, data, error} = useQuery<RateResult>(GET_RATES, {
    variables: {currency},
  });
  if (error) {
    throw error;
  }
  if (loading) {
    return <RatesPlaceholder />;
  }
  return (
    <Table>
      <RatesHeader />
      {data.rates.map((rate) => (
        <TableRow>
          <TableCell>{rate.currency}</TableCell>
          <TableCell>{rate.name}</TableCell>
          <TableCell>{rate.rate}</TableCell>
        </TableRow>
      ))}
    </Table>
  );
}

export default Rates;
