import React from "react";

export enum RendererType {
  HTML = "HTML",
  PDF = "PDF",
}

const defaultValue = {
  rendererType: RendererType.HTML,
};

const DocumentContext = React.createContext(defaultValue);

export default DocumentContext;
