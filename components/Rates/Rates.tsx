import {gql, useQuery} from "@apollo/client";
import Table, {TableRow, TableCell, TableBody} from "../Table";
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
      <TableBody>
        {data.rates.map((rate) => (
          <TableRow key={rate.currency}>
            <TableCell>{rate.currency}</TableCell>
            <TableCell>{rate.name}</TableCell>
            <TableCell>{rate.rate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Rates;
