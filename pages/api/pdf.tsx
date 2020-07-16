import ReactPDF from "@react-pdf/renderer";
import {NextApiRequest, NextApiResponse} from "next";
import PdfPage from "../pdf";
// import {getMarkupFromTree} from "@apollo/client/react/ssr";

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Type", "application/pdf");
  // This renders to a stream but doesn't wait for the API calls to be finshed
  const stream = await ReactPDF.renderToStream(<PdfPage currency="USD" />);

  // This waits for API calls but expects to render to a string
  // const stream = await getMarkupFromTree({
  //   tree: <PdfPage currency="USD" />,
  //   renderFunction: ReactPDF.renderToStream,
  // });

  // Sends data back as a response
  stream.on("data", (data) => {
    res.write(data);
  });
  stream.on("end", () => {
    res.statusCode = 200;
    res.end();
  });
};
