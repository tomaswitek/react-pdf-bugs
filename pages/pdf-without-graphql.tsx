import ReactPdf from "@react-pdf/renderer";
import RatesPDF from "../components/RatesPDF";

const PdfPage = () => null;

PdfPage.getInitialProps = async ({res}) => {
  const stream = await ReactPdf.renderToStream(<RatesPDF currency="USD" />);

  if (stream && res) {
    res.setHeader("Content-disposition", 'attachment; filename="rates.pdf"');
    res.setHeader("Content-Type", "application/pdf");
    stream.pipe(res);
  }

  return {};
};

export default PdfPage;
