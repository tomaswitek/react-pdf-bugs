function Chart() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" width="233" height="143">
      <rect width="233" height="143" fill="white" />
      <line
        x1="0"
        x2="0"
        y1="0"
        y2="5"
        style={{stroke: "#777", strokeWidth: 1}}
      />
      <text
        dominant-baseline="text-before-edge"
        text-anchor="middle"
        transform="translate(0,10) rotate(0)"
        style={{
          fontSize: "8px",
          fill: "#333",
        }}
      >
        01.05.20
      </text>
      <g transform="translate(100,100) rotate(0)">
        <line
          x1="0"
          x2="200"
          y1="0"
          y2="0"
          stroke="#dddddd"
          strokeWidth="1"
        ></line>
        <text
          dominant-baseline="central"
          text-anchor="start"
          transform="translate(10,0) rotate(0)"
          style={{fill: "rgb(51, 51, 51)"}}
        >
          0
        </text>
      </g>
    </svg>
  );
}

export default Chart;
