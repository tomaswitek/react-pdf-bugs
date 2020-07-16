import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import {ApolloProvider} from "@apollo/client";
import {useApollo} from "../lib/apolloClient";
import RendererContext, {RendererType} from "../lib/RendererContext";
import Rates from "../components/Rates";

console.log(require("../public/fonts/Graphik-Light.ttf"));

Font.register({
  family: "GraphikLight",
  src: require("../public/fonts/Graphik-Light.ttf").default,
  fontStyle: "normal",
  fontWeight: "light",
});

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    padding: "50 100",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: "20 0",
    fontFamily: "GraphikLight",
  },
  rates: {},
});

interface PdfPageProps {
  currency: string;
}

// Create Document Component
function PdfPage({currency}: PdfPageProps) {
  const apolloClient = useApollo(null);
  return (
    <RendererContext.Provider value={{rendererType: RendererType.PDF}}>
      <ApolloProvider client={apolloClient}>
        <Document>
          <Page size="A4" style={styles.page}>
            <Text style={styles.title}>{currency} Rates</Text>
            <View style={styles.rates}>
              <Rates currency="USD" />
            </View>
          </Page>
        </Document>
      </ApolloProvider>
    </RendererContext.Provider>
  );
}

export default PdfPage;
