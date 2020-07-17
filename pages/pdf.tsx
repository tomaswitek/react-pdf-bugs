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
import Languages from "../components/Languages";
import Chart from "../components/Chart";
import PdfChart from "../components/PdfChart";
import Svg from "../components/Svg";

const font = {
  family: "GraphikLight",
  src: require("../public/fonts/Graphik-Light.ttf").default,
  fontStyle: "normal",
  fontWeight: "light",
};

Font.register(font);

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

// Create Document Component
function PdfPage() {
  const apolloClient = useApollo(null);

  return (
    <RendererContext.Provider value={{rendererType: RendererType.PDF}}>
      <ApolloProvider client={apolloClient}>
        <Document>
          <Page size="A4" style={styles.page}>
            <Text style={styles.title}>Languages</Text>
            <View style={styles.rates}>
              <PdfChart />
              <Languages />
            </View>
          </Page>
        </Document>
      </ApolloProvider>
    </RendererContext.Provider>
  );
}

export default PdfPage;
