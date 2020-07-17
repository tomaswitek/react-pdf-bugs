function Chart() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" width="233" height="143">
      <rect width="233" height="143" fill="white" />
      <g transform="translate(0,5)">
        <g transform="translate(0,118)">
          <g transform="translate(33.28787878787879,0)" style={{opacity: 1}}>
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
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Chart;