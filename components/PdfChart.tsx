import {Svg, G, Rect, Line, Text} from "@react-pdf/renderer";

function PdfChart() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" role="img" width="233" height="143">
      <Rect width="233" height="143" fill="white" />
      <Line
        x1={0}
        x2={0}
        y1={0}
        y2={5}
        style={{stroke: "#777", strokeWidth: 1}}
      />
      <Text
        dominantBaseline="text-before-edge"
        textAnchor="middle"
        transform="translate(0,10) rotate(0)"
        style={{
          fontSize: "8px",
          fill: "#333",
        }}
      >
        01.05.20
      </Text>
      <G transform="translate(100,100) rotate(0)">
        <Line
          x1="0"
          x2="200"
          y1="0"
          y2="0"
          stroke="#dddddd"
          strokeWidth="1"
        ></Line>
        <Text
          dominantBaseline="central"
          textAnchor="start"
          transform="translate(10,0) rotate(0)"
          style={{fill: "rgb(51, 51, 51)"}}
        >
          0
        </Text>
      </G>
    </Svg>
  );
}

export default PdfChart;
