import ReactPDF, {pdf} from "@react-pdf/renderer";
import RatesPDF from "../components/RatesPDF";

const PdfPage = () => null;

PdfPage.getInitialProps = async ({res}) => {
  // const stream = await ReactPdf.renderToStream(<RatesPDF currency="USD" />);

  await ReactPDF.render(<RatesPDF currency="USD" />, `output.pdf`);
  // const stream = await pdf(<RatesPDF currency="USD" />);

  // console.log(stream);

  // const string = await stream.toBuffer();

  // if (stream && res) {
  //   // res.setHeader("Content-disposition", 'attachment; filename="rates.pdf"');
  //   // res.setHeader("Content-Type", "application/pdf");
  //   stream.pipe(stream);
  // }

  return {};
};

export default PdfPage;
