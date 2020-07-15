import ReactPdf from "@react-pdf/renderer";
import {getMarkupFromTree} from "@apollo/client/react/ssr";
import RatesPDF from "../components/RatesPDF";

const PdfPage = () => null;

PdfPage.getInitialProps = async (ctx) => {
  const {res, apolloClient} = ctx;
  const stream = await getMarkupFromTree({
    tree: <RatesPDF apolloClient={apolloClient} />,
    renderFunction: ReactPdf.renderToStream,
  });

  if (stream && res) {
    res.setHeader("Content-disposition", 'attachment; filename="rates.pdf"');
    res.setHeader("Content-Type", "application/pdf");
    stream.pipe(res);
  }

  return {};
};

export default PdfPage;
