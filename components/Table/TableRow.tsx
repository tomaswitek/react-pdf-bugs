import ReactPDF from "@react-pdf/renderer";
import {ReactNode} from "react";
import RendererContext, {RendererType} from "../../lib/RendererContext";
import styles from "./styles";

interface TableRowProps extends ReactPDF.ViewProps {
  children?: ReactNode;
}

function TableRow(props: TableRowProps) {
  const {children} = props;
  return (
    <RendererContext.Consumer>
      {({rendererType}) => {
        if (rendererType === RendererType.HTML) {
          return <tr>{children}</tr>;
        }
        return <ReactPDF.View style={styles.row} {...props} />;
      }}
    </RendererContext.Consumer>
  );
}

export default TableRow;
