import ReactPDF from "@react-pdf/renderer";
import RatesPDF from "../components/RatesPDF";
import {ServerResponse} from "http";

const PdfPage = () => null;

PdfPage.getInitialProps = async ({res}: {res: ServerResponse}) => {
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-disposition", 'attachment; filename="rates.pdf"');
  const currency = "USD";
  const stream = await ReactPDF.renderToStream(
    <RatesPDF currency={currency} />
  );

  stream.on("data", (data) => {
    res.write(data);
  });

  stream.on("end", (data) => {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-disposition", 'attachment; filename="rates.pdf"');
    res.end();
  });

  // stream.on("end", () => {
  //   res.setHeader("Content-Type", "application/pdf");
  //   res.setHeader("Content-disposition", 'attachment; filename="rates.pdf"');
  //   res.end();
  // });

  // stream.pipe(res);
  // stream.

  // res.setHeader("Content-disposition", 'attachment; filename="rates.pdf"');
  // res.setHeader("Content-Type", "application/pdf");

  return {currency};
};

export default PdfPage;
