import ReactPDF from "@react-pdf/renderer";
import {ReactNode} from "react";
import RendererContext, {RendererType} from "../../lib/RendererContext";

interface TableHeadProps extends ReactPDF.ViewProps {
  children?: ReactNode;
}

function TableHead(props: TableHeadProps) {
  const {children} = props;
  return (
    <RendererContext.Consumer>
      {({rendererType}) => {
        if (rendererType === RendererType.HTML) {
          return <thead>{children}</thead>;
        }
        return <ReactPDF.View {...props} />;
      }}
    </RendererContext.Consumer>
  );
}

export default TableHead;
