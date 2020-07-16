import ReactPDF from "@react-pdf/renderer";
import {ReactNode} from "react";
import RendererContext, {RendererType} from "../../lib/RendererContext";

interface TableBodyProps extends ReactPDF.ViewProps {
  children?: ReactNode;
}

function TableBody(props: TableBodyProps) {
  const {children} = props;
  return (
    <RendererContext.Consumer>
      {({rendererType}) => {
        if (rendererType === RendererType.HTML) {
          return <tbody>{children}</tbody>;
        }
        return <ReactPDF.View {...props} />;
      }}
    </RendererContext.Consumer>
  );
}

export default TableBody;
