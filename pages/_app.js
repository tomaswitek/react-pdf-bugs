import {ApolloProvider} from "@apollo/client";
import {useApollo} from "../lib/apolloClient";
import RendererContext, {RendererType} from "../lib/RendererContext";

export default function App({Component, pageProps}) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <RendererContext.Provider value={{rendererType: RendererType.HTML}}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </RendererContext.Provider>
  );
}
