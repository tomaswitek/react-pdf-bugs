import ReactPDF from "@react-pdf/renderer";
import {ReactNode} from "react";
import RendererContext, {RendererType} from "../../lib/RendererContext";
import styles from "./styles";

interface TableProps extends ReactPDF.ViewProps {
  children?: ReactNode;
}

function Table(props: TableProps) {
  const {children, style} = props;
  return (
    <RendererContext.Consumer>
      {({rendererType}) => {
        if (rendererType === RendererType.HTML) {
          return <table>{children}</table>;
        }
        return <ReactPDF.View style={styles.table} {...props} />;
      }}
    </RendererContext.Consumer>
  );
}

export default Table;
