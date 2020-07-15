import {gql, useQuery} from "@apollo/client";

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
  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    throw error;
  }
  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Name</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        {data.rates.map((rate) => (
          <tr>
            <td>{rate.currency}</td>
            <td>{rate.name}</td>
            <td>{rate.rate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Rates;
