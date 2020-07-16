import React from "react";
import {Page, Text, View, Document, StyleSheet} from "@react-pdf/renderer";
import {ApolloProvider} from "@apollo/client";
import {useApollo} from "../lib/apolloClient";
import RendererContext, {RendererType} from "../lib/RendererContext";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: "20 0",
  },
  rates: {},
});

interface RatesPDFProps {
  currency: string;
}

// Create Document Component
function RatesPDF({currency}: RatesPDFProps) {
  const apolloClient = useApollo(null);
  return (
    <RendererContext.Provider value={{rendererType: RendererType.PDF}}>
      <ApolloProvider client={apolloClient}>
        <Document>
          <Page size="A4" style={styles.page}>
            <Text style={styles.title}>{currency} Rates</Text>
            <View style={styles.rates}></View>
          </Page>
        </Document>
      </ApolloProvider>
    </RendererContext.Provider>
  );
}

export default RatesPDF;
