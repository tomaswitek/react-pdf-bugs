import ReactPDF from "@react-pdf/renderer";
import RatesPDF from "../../components/RatesPDF";
import {NextApiRequest, NextApiResponse} from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Type", "application/pdf");
  // res.setHeader("Content-disposition", 'attachment; filename="rates.pdf"');
  const stream = await ReactPDF.renderToStream(<RatesPDF currency="USD" />);
  stream.on("data", (data) => {
    res.write(data);
  });
  stream.on("end", () => {
    res.end();
  });
};
