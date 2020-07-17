/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {ReactElement} from "react";
import ReactDOMServer from "react-dom/server";
import atob from "atob";

/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import camelcase from "camelcase";
import {
  fromPairs,
  compose,
  split,
  map,
  KeyValuePair,
  reject,
  isNil,
} from "ramda";
import {DOMParser} from "xmldom";
import ReactPDF from "@react-pdf/renderer";

function isElement(node: any): node is Element {
  return node.nodeType === 1;
}

type StylePair = KeyValuePair<string, string>;
type StyleObject = {[rule: string]: string};

function parseStyle(style: string) {
  const mapToStylePair = (styleRule: string): StylePair | undefined => {
    const stylePair = styleRule.split(":");
    if (stylePair.length === 2) {
      return [camelcase(stylePair[0]), stylePair[1].replace("px", "")];
    }
  };

  const styles = compose<
    string,
    string[],
    Array<StylePair | undefined>,
    StylePair[],
    StylePair[],
    StyleObject
  >(
    fromPairs,
    reject((pair: StylePair) => pair[0] === "fontFamily"),
    reject(isNil),
    map(mapToStylePair),
    split(";")
  )(style);

  return styles;
}

function attributesToProps(attributes: NamedNodeMap) {
  const attributePairs = Array.from(attributes).map(
    (attr) =>
      [
        camelcase(attr.nodeName),
        attr.nodeName === "style"
          ? parseStyle(attr.value)
          : attr.value.replace("px", ""),
      ] as [string, string]
  );
  const attributesObject = fromPairs(attributePairs);
  return attributesObject;
}

function nodeToComponent(node: Node, key: number): React.ReactNode {
  const nodeName = camelcase(node.nodeName, {pascalCase: true});
  const Component = ReactPDF[nodeName];
  if (!isElement(node)) {
    return null;
  }
  if (!Component) {
    throw new Error(`Unexpected SVG element: ${nodeName}.`);
  }
  const props = attributesToProps(node.attributes);
  const children = traverseNodes(node.childNodes);

  if (nodeName === "Circle") {
    if (!props.cx) {
      props.cx = "0";
    }
    if (!props.cy) {
      props.cy = "0";
    }
  }

  if (props.fill === "transparent") {
    props.fill = "white";
  }

  return (
    <Component key={key} {...props}>
      {children.length ? children : node.textContent}
    </Component>
  );
}

function traverseNodes(nodes: NodeList): React.ReactNode[] {
  return Array.from(nodes)
    .map(nodeToComponent)
    .filter((node) => !!node);
}

export function parseSvgString(svg: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svg, "image/svg+xml");
  const {documentElement} = doc;
  const height = documentElement.getAttribute("height");
  const width = documentElement.getAttribute("width");
  let viewBox = documentElement.getAttribute("viewBox");
  if (!viewBox) {
    viewBox = `0 0 ${width} ${height}`;
  }
  return {
    height,
    width,
    viewBox,
    children: traverseNodes(doc.documentElement.childNodes),
  };
}

export interface SvgProps {
  src?: string;
  width?: number | string;
  height?: number;
  children?: ReactElement;
}

function Svg({src, children, width, height}: SvgProps) {
  let svgString: string | undefined;
  if (children) {
    svgString = ReactDOMServer.renderToString(children);
  }
  const parsedSvg = parseSvgString(svgString);
  return (
    <ReactPDF.Svg width={width} height={height} viewBox={parsedSvg.viewBox}>
      {parsedSvg.children}
    </ReactPDF.Svg>
  );
}

export default Svg;
