import ReactPDF from "@react-pdf/renderer";
import {ReactNode} from "react";
import RendererContext, {RendererType} from "../../lib/RendererContext";
import styles from "./styles";

interface TableCellProps extends ReactPDF.TextProps {
  children?: ReactNode;
}

function TableCell(props: TableCellProps) {
  const {children} = props;
  return (
    <RendererContext.Consumer>
      {({rendererType}) => {
        if (rendererType === RendererType.HTML) {
          return <td>{children}</td>;
        }
        return <ReactPDF.Text style={styles.cell} {...props} />;
      }}
    </RendererContext.Consumer>
  );
}

export default TableCell;
